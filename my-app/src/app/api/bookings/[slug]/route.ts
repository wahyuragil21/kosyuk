export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
import {Building} from "../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";

export async function GET(request: Request, {params}: {params: {slug:string}}) {
  try {
    
    const {slug} = params

    const { rows }: {rows: Building[]} = await pool.query(`
    SELECT 
    *
    FROM 
        "Bookings" b
    WHERE
        b.slug = ${slug}
    `)
    
    const Bookings : Building = rows[0]

    return NextResponse.json(Bookings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

export async function POST(request: Request, {params}: {params: {slug:string}}) {
  try {
    const body = await request.json()
    const providerId = request.headers.get('user_id')

    const {slug} = params
    const data = {
      ...body,
      provider_id : providerId,
      slug : 'book' + providerId + Math.random().toString().slice(-5)
    }
    console.log(data.slug);
    
    let column = Object.keys(data).map(e=>`"${e}"`).join(', ')
    let value = Object.values(data).map(e=>`'${e}'`).join(', ')
    
     const insert = await pool.query(`
      INSERT INTO "Buildings"(${column})
      VALUES(${value});
    `)

    const { rows }: {rows: Building[]} = await pool.query(`
    SELECT 
    *
    FROM 
        "Bookings" b
    WHERE
        b.slug = ${slug}
    `)
    
    const Bookings : Building = rows[0]

    return NextResponse.json(Bookings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

