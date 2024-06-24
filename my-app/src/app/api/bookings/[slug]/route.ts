export const dynamic = 'force-dynamic' // defaults to auto
import {Booking} from "../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";

export async function GET(request: Request, {params}: {params: {slug:string}}) {
  try {
    
    const {slug} = params

    const { rows }: {rows: Booking[]} = await pool.query(`
    SELECT 
    *
    FROM 
        "Bookings" b
    WHERE
        b.slug = ${slug}
    `)
    
    const Bookings : Booking = rows[0]

    return NextResponse.json(Bookings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

export async function PATCH(request: Request) {
  try {

    const providerId = request.headers.get('user_id')
    const body = await request.json()
    const {status} = body
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


