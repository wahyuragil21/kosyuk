export const dynamic = 'force-dynamic' // defaults to auto
import {Building} from "../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";

export async function GET(request: Request) {
  try {

    const providerId = request.headers.get('user_id')

    const { rows }: {rows: Building[]} = await pool.query(`
    SELECT 
      *
    FROM 
      "Buildings" b
    WHERE
      b.provider_id = ${providerId}
    `)
    
    const buildings = rows

    return NextResponse.json(buildings)

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
    console.log(data.slug);
    
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

