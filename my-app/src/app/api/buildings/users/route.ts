export const dynamic = 'force-dynamic' // defaults to auto
import {Building} from "../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";

export async function GET(request: Request) {
  try {

    const { rows }: {rows: Building[]} = await pool.query(`
      SELECT 
          b.id,
          b.building_name,
          b.address,
          b.coordinate,
          b.status,
          b.price,
          b.size,
          b.number_of_rooms,
          b.description,
          b.provider_id,
          b.slug,
          COALESCE(json_agg(i.image_url) FILTER (WHERE i.id IS NOT NULL), '[]') AS images,
          COALESCE(json_agg(f.facility_name) FILTER (WHERE f.id IS NOT NULL), '[]') AS facilities,
          COALESCE(json_agg(bk.status) FILTER (WHERE bk.id IS NOT NULL), '[]') AS bookings,
          COALESCE(json_agg(r.rules_name) FILTER (WHERE r.id IS NOT NULL), '[]') AS rules,
          COALESCE(json_agg(s.specification) FILTER (WHERE s.id IS NOT NULL), '[]') AS specifications
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
      GROUP BY 
          b.id
      ORDER BY 
          b.id;
    `)
    
    const buildings = rows

    return NextResponse.json(buildings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

