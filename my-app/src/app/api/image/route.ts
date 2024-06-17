export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
var bcrypt = require('bcryptjs');

import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    
    const {image}: {image: string} = await request.json()
    
    if (!image) {
      return NextResponse.json({message: 'please input image'},{status: 400})
    }

    let input = {

    }
    
    const insert = await sql`INSERT INTO "image" 
    ("building_id", "image_url")
    VALUES
    (${1}, ${image})
    `
    return NextResponse.json({message: 'success to register user'})

  } catch (error) {
    console.log(error);
    return NextResponse.json({message: error}, {status: 500})
  }
}