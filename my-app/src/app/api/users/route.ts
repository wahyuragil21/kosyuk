import { NextResponse } from "next/server";

export async function GET() {
  console.log('tes');
  
  interface User {
    "hihi": string
  }
  let user: User = {
    'hihi': 'hoho'
  }
  return NextResponse.json(user)
}