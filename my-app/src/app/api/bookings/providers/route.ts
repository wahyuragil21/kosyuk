export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
import {Booking} from "../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";

export async function GET(request: Request) {
  try {

    const providerId = request.headers.get('user_id')


    const { rows }: {rows: Booking[]} = await pool.query(`
    SELECT 
      *
    FROM 
      "Bookings" b
    WHERE
      b.provider_id = ${providerId}
    `)
    
    const Bookings = rows

    return NextResponse.json(Bookings)

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
      slug : 'book' + userId + 'build' + body.building_id + Math.random().toString().slice(-5)
    }
    console.log(data.slug);
    
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
