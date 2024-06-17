export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
import {Building} from "../../../../types/types"

import { NextResponse } from "next/server";
import { verifyToken } from "@/helpers/jwt";

export async function GET(request: Request) {
  try {

    const { rows }: {rows: Building[]} = await sql`
    SELECT 
    *
    FROM 
        "Buildings" b
    `
    
    const buildings = rows

    return NextResponse.json(buildings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

