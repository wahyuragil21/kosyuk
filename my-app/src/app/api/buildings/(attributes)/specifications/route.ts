import { pool } from "@/configDB/pg-config"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    let query = `
      SELECT 
      *
      FROM Specifications
    `

    const { rows } = await pool.query(query)

    const buildings = rows

    return NextResponse.json(rows)

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}