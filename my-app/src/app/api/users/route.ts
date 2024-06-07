export const dynamic = 'force-dynamic' // defaults to auto

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    interface User {
      "hihi": string
    }
  
    let user: User = {
      'hihi': 'deploy'
    }
  
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(error)
  }

}