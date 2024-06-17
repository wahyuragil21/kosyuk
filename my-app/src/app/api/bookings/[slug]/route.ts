export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
import {Building} from "../../../../types/types"

import { NextResponse } from "next/server";

export async function GET(request: Request, {params}: {params: {slug:string}}) {
  try {
    
    const {slug} = params

    const { rows }: {rows: Building[]} = await sql`
    SELECT 
    *
    FROM 
        "Bookings" b
    WHERE
        b.slug = ${slug}
    `
    
    const Bookings : Building = rows[0]

    return NextResponse.json(Bookings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

