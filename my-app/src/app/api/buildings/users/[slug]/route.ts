export const dynamic = 'force-dynamic' // defaults to auto
import {Building} from "../../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";
import { mappingDetail } from "@/helpers/mapping";

export async function GET(request: Request, {params}: {params: {slug:string}}) {
  try {
    let queryGroupBy = ``
    const {slug} = params
    let query = `SELECT 
          b.id,
          b.building_name,
          b.address,
          b.coordinate,
          b.status,
          b.price,
          b.description,
          b.provider_id,
          b.slug,
          b.amount,
          p.telp AS provider_telp,
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
      LEFT JOIN 
            "Providers" p ON b.provider_id = p.id
      WHERE b.slug = $1
      GROUP BY b.id, p.telp
    `
    const { rows }: {rows: Building[]} = await pool.query(query,[slug])
    
    const buildings : Building = rows[0]

    return NextResponse.json(mappingDetail(buildings))

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

