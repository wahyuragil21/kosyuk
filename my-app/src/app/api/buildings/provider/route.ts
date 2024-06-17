export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
import {Building} from "../../../../types/types"

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {

    const providerId = request.headers.get('user_id')

    const { rows }: {rows: Building[]} = await sql`
    SELECT 
      *
    FROM 
      "Buildings" b
    WHERE
      b.provider_id = ${providerId}
    `
    
    const buildings = rows

    return NextResponse.json(buildings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

