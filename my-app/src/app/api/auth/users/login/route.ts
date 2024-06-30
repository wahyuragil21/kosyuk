export const dynamic = 'force-dynamic' // defaults to auto
import {User} from "../../../../../types/types"
import bcrypt from 'bcryptjs'

import { NextResponse } from "next/server";
import { signToken } from "@/helpers/jwt";
import { pool } from "@/configDB/pg-config";

export async function POST(request: Request) {
  try {
    
    const {email , password} = await request.json()

    const { rows }: {rows: User[]} = await pool.query(`SELECT * from "Users" where email='${email}'`)
    
    if (rows.length == 0) {
      return NextResponse.json({message: 'incorect email / password'},{status: 403})
    }

    const user = rows[0]
    
    const compare = bcrypt.compareSync(password ,user.password)

    if (!compare) {
      return NextResponse.json({message: 'incorect email / password'},{status: 403})
    }
    
    const access_token = await signToken({...user, role : "user"})
    
    
    return NextResponse.json({
      "access_token": access_token
    })

  } catch (error) {
    console.log(error);
    return NextResponse.json(error)
  }
}