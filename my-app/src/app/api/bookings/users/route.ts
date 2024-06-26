export const dynamic = 'force-dynamic' // defaults to auto
import {Booking} from "../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";
import { mappingBookings } from "@/helpers/mapping";

export async function GET(request: Request) {
  try {

    const userId = request.headers.get('user_id')
    
    let query = `
    SELECT 
        b.id,
        b.building_name,
        b.address,
        b.coordinate,
        b.status,
        b.category,
        b.price,
        b.size,
        b.number_of_rooms,
        b.description,
        b.provider_id,
        b.slug,
        b.type,
        p.telp AS provider_telp,
        COALESCE((array_agg( i.image_url) FILTER (WHERE i.id IS NOT NULL))[1], '') AS thumbnail,
        COALESCE(
          json_agg(DISTINCT i.image_url) FILTER (
          WHERE i.id IS NOT NULL 
          AND i.image_url != (SELECT (array_agg(i2.image_url) FILTER (WHERE i2.id IS NOT NULL))[1] FROM "Images" i2 WHERE i2.building_id = b.id)
          ), 
          '[]'
        ) AS images,
        COALESCE(json_agg(DISTINCT f.facility_name) FILTER (WHERE f.id IS NOT NULL), '[]') AS facilities,
        COALESCE(json_agg(DISTINCT bk.status) FILTER (WHERE bk.id IS NOT NULL), '[]') AS bookings,
        COALESCE(json_agg(DISTINCT r.rules_name) FILTER (WHERE r.id IS NOT NULL), '[]') AS rules,
        COALESCE(json_agg(DISTINCT s.specification) FILTER (WHERE s.id IS NOT NULL), '[]') AS specifications
    FROM 
        "Buildings" b
    LEFT JOIN 
        "Images" i ON b.id = i.building_id
    LEFT JOIN 
        "Facilities" f ON b.id = f.building_id
    LEFT JOIN 
        "Bookings" bk ON b.id = bk.building_id
    LEFT JOIN 
        "Rules" r ON b.id = r.building_id
    LEFT JOIN 
        "Specifications" s ON b.id = s.building_id
    LEFT JOIN 
        "Providers" p ON b.provider_id = p.id
    WHERE bk.user_id = $1
    GROUP BY 
        b.id, p.telp
    ORDER BY 
        b.id;
  `
    const { rows }: {rows: Booking[]} = await pool.query(query, [userId])
    

    const bookings = rows

    return NextResponse.json(mappingBookings(bookings))
  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const userId = request.headers.get('user_id')
    
    const data = {
      ...body,
      user_id : userId,
      slug : 'book' + userId + 'buildings' + body.building_id + Math.random().toString().slice(-5)
    }
    
    let column = Object.keys(data).map(e=>`"${e}"`).join(', ')
    let value = Object.values(data).map(e=>`'${e}'`).join(', ')
    
     const insert = await pool.query(`
      INSERT INTO "Bookings"(${column})
      VALUES(${value});
    `)
    
    if (insert.rowCount == 1) {
      return NextResponse.json({message: 'success post booking'}, {status: 201})
    }

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

