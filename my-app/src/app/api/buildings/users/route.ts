export const dynamic = 'force-dynamic' // defaults to auto
import {Building} from "../../../../types/types"

import { NextResponse, NextRequest } from "next/server";
import { pool } from "@/configDB/pg-config";
import { mappingBuildings } from "@/helpers/mapping";

export async function GET(request: NextRequest) {
  try {
    const filters : any = {}
    const params = request.nextUrl
    params.search.substring(1).split('&').forEach(e=>{filters[e.split('=')[0]]= e.split('=')[1]})
    console.log(filters);
    
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
          b.type,
          b.number_of_rooms,
          b.description,
          b.provider_id,
          b.slug,
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
    `

    const values = [];
    const conditions = [];
  
    if (filters.category) {
      values.push(filters.category);
      conditions.push(`b.category = $${values.length}`);
    }
  
    if (filters.priceMin) {
      values.push(filters.priceMin);
      conditions.push(`b.price >= $${values.length}`);
    }
  
    if (filters.priceMax) {
      values.push(filters.priceMax);
      conditions.push(`b.price <= $${values.length}`);
    }
  
    if (filters.numberOfRooms) {
      values.push(filters.numberOfRooms);
      conditions.push(`b.number_of_rooms = $${values.length}`);
    }
  
    // Tambahkan kondisi filter lainnya di sini sesuai kebutuhan
    console.log(conditions);
    
    if (conditions.length > 0) {
      query += ` WHERE ${conditions.join(' AND ')}`;
    }
  
    query += `
      GROUP BY 
        b.id
      ORDER BY 
        b.id;
    `;
    const { rows }: {rows: Building[]} = await pool.query(query,values)
    
    const buildings = rows

    return NextResponse.json(mappingBuildings(buildings))

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

