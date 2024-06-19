export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
import {Building} from "../../../../types/types"

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";

export async function GET(request: Request, {params}: {params: {slug:string}}) {
  try {
    console.log(request.headers.get('user_id'));
    
    const {slug} = params

    const { rows }: {rows: Building[]} = await pool.query(`
    SELECT 
    *
    FROM 
        "Buildings" b
    WHERE
        b.slug = ${slug}
    `)
    
    const buildings : Building = rows[0]

    return NextResponse.json(buildings)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}

