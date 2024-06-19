export const dynamic = 'force-dynamic' // defaults to auto
import { sql } from "@vercel/postgres";
import {User} from "../../../../types/types"
var bcrypt = require('bcryptjs');

import { NextResponse } from "next/server";
import { pool } from "@/configDB/pg-config";


export async function POST(request: Request) {
  try {
    
    const {username, telp, password} = await request.json()
    
    if (!username) {
      return NextResponse.json({message: 'please input username'},{status: 400})
    }

    if (!password) {
      return NextResponse.json({message: 'please input password'},{status: 400})
    }

    const { rows }: {rows: User[]} = await pool.query(`SELECT * from "Providers" where username=${username}`)
    
    if (rows.length != 0) {
      return NextResponse.json({message: 'username already exist'},{status: 400})
    }

    const hash = bcrypt.hashSync(password, 10)
    
    const insert = await pool.query(`INSERT INTO "Providers" 
    ("username","telp", "password")
    VALUES
    (${username}, ${telp}, ${hash})
    `)
    return NextResponse.json({message: 'success to register provider'})

  } catch (error) {
    console.log(error);
    return NextResponse.json({message: error}, {status: 500})
  }
}