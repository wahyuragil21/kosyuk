export const dynamic = 'force-dynamic' // defaults to auto
import {Building} from "../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";
import { mappingDetail } from "@/helpers/mapping";

export async function GET(request: Request, {params}: {params: {slug:string}}) {
  try {
    
    const {slug} = params
    console.log(slug);
    
    const { rows }: {rows: Building[]} = await pool.query(`SELECT 
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
          b.type,
          p.telp AS provider_telp,
          COALESCE(json_agg(DISTINCT i.image_url) FILTER (WHERE i.id IS NOT NULL), '[]') AS images,
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
      WHERE 
          b.slug = $1
      GROUP BY 
          b.id, p.telp
    `,[slug])
    
    const buildings : Building = rows[0]

    return NextResponse.json(mappingDetail(buildings))

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

