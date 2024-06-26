import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './helpers/jwt';
import { headers } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  return NextResponse.next()
  const isLoginPage = request.nextUrl.pathname.startsWith('/api/auth')
  
  if (isLoginPage) {
    return NextResponse.next()
  }
  
  const requestHeaders = new Headers(request.headers)
  const token = requestHeaders.get('access_token')
  
  if (!token) {
    return NextResponse.json({"message": "Unauthorzied"}, {status: 401})
  }

  const payload = await verifyToken(token)
  if (!payload?.id) {
    return NextResponse.json({"message": "invalid token"}, {status: 401})
  }
  const id : string = payload.id.toString()

  requestHeaders.set('user_id', id)
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  return response
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:  [
    '/api/:path*',
  ],
  
}