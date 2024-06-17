export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
import {Booking} from "../../../../types/types"

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {

    const providerId = request.headers.get('user_id')


    const { rows }: {rows: Booking[]} = await sql`
    SELECT 
      *
    FROM 
      "Bookings" b
    WHERE
      b.provider_id = ${providerId}
    `
    
    const Bookings = rows

    return NextResponse.json(Bookings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

