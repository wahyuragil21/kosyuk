export const dynamic = 'force-dynamic' // defaults to auto
import { Booking } from "../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";
import { mappingBookings, mappingDetailBook } from "@/helpers/mapping";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const role = request.headers.get('user_role')
    const id = request.headers.get('user_id')

    let queryGroupBy = ''
    let queryPhone = ''
    if (role == "user") {
      queryPhone = `u.telp AS provider_telp,`
      queryGroupBy = `  LEFT JOIN 
      "Providers" u ON b.provider_id = u.id
      WHERE bk.user_id = ${id}
      GROUP BY b.id, u.id`
    } else {
      queryPhone = `u.telp AS user_telp,`
      queryGroupBy = `  LEFT JOIN 
      "Users" u ON bk.user_id = u.id
      WHERE u.id = ${id}
      GROUP BY b.id, u.id`
    }

    let query = `
    SELECT 
        b.id,
        b.building_name,
        b.thumbnail,
        b.address,
        b.coordinate,
        b.status,
        b.category,
        b.type,
        b.price,
        b.description,
        b.provider_id,
        b.slug,
        b.amount,
        ${queryPhone}
        COALESCE(json_agg(DISTINCT i.image_url) FILTER (WHERE i.id IS NOT NULL), '[]') AS images,
        COALESCE(json_agg(DISTINCT f.facility_name) FILTER (WHERE f.id IS NOT NULL), '[]') AS facilities,
        COALESCE(json_agg(DISTINCT bk.status) FILTER (WHERE bk.id IS NOT NULL), '[]') AS bookings,
        COALESCE(json_agg(DISTINCT r.rules_name) FILTER (WHERE r.id IS NOT NULL), '[]') AS rules,
        COALESCE(json_agg(DISTINCT s.specification_name) FILTER (WHERE s.id IS NOT NULL), '[]') AS specifications
      FROM 
        "Buildings" b
      LEFT JOIN 
          "Images" i ON b.id = i.building_id
      LEFT JOIN 
          "Building_facilities" bf ON b.id = bf.building_id
      LEFT JOIN 
          "Facilities" f ON bf.facility_id = f.id
      LEFT JOIN 
          "Bookings" bk ON b.id = bk.building_id
      LEFT JOIN 
          "Building_rules" br ON b.id = br.building_id
      LEFT JOIN 
          "Rules" r ON r.id = br.building_id
      LEFT JOIN 
          "Building_specifications" bs ON b.id = bs.building_id
      LEFT JOIN 
          "Specifications" s ON s.id = bs.building_id
    ${queryGroupBy}
      ORDER BY 
          b.id;
  `

    const { rows }: { rows: Booking[] } = await pool.query(query)

    const Bookings: Booking[] = rows

    return NextResponse.json(mappingBookings(Bookings))

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

export async function PATCH(request: Request) {
  try {

    const providerId = request.headers.get('user_id')
    const body = await request.json()
    const { status } = body
    const patch = await pool.query(`
      UPDATE "Bookings"
      SET "status" = '${status}',
      WHERE condition;
    `)

    const Bookings = patch

    return NextResponse.json(Bookings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}


