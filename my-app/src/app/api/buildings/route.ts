export const dynamic = 'force-dynamic' // defaults to auto
import {Building} from "../../../types/types"

import { NextResponse, NextRequest } from "next/server";
import { pool } from "@/configDB/pg-config";
import { mappingBuildings } from "@/helpers/mapping";

export async function GET(request: NextRequest) {
  try {
    const filters : any = {}
    const params = request.nextUrl
    params.search.substring(1).split('&').forEach(e=>{filters[e.split('=')[0]]= e.split('=')[1]})
    const role = request.headers.get('user_role')
    
    const id = request.headers.get('user_id')
    
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
    `

    const values = [];
    const conditions = [];
  
    if (filters.category) {
      values.push(filters.category);
      conditions.push(`b.category = $${values.length}`);
    }
  
    // Tambahkan kondisi filter lainnya di sini sesuai kebutuhan
    if (role == 'provider') {
      query += ` WHERE b.provider_id = '${id}'`
    } 
    
    if (conditions.length > 0) {
      if (role == 'provider') {
        query += ` AND ${conditions.join(' AND ')}`;
      } else {
        query += ` WHERE ${conditions.join(' AND ')}`;
      }
    }
  
    query += `
      GROUP BY 
        b.id
      ORDER BY 
        b.id;
    `;
    
    const { rows }: {rows: Building[]} = await pool.query(query, values)
    
    const buildings = rows

    return NextResponse.json(mappingBuildings(buildings))

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const providerId = request.headers.get('user_id')
    
    const data = {
      ...body,
      provider_id : providerId,
      slug : body.building_name.split(" ").join("") + "_" + Math.random().toString().slice(-5)
    }
    
    let column = Object.keys(data).map(e=>`"${e}"`).join(', ')
    let value = Object.values(data).map(e=>`'${e}'`).join(', ')
    
     const insert = await pool.query(`
      INSERT INTO "Buildings"(${column})
      VALUES(${value});
    `)
    if (insert.rowCount == 1) {
      return NextResponse.json({message: 'success post building'}, {status: 201})
    }
      
  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}