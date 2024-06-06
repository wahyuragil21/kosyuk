'use client'

import { useEffect, useState } from "react"
import User from "../../types/types"

export default function Page() {

  const [user,setUser] = useState({hihi:""})
  
  const fetchUser = async ()=>{

    let res : Response = await fetch('http://localhost:3000/api/users')
    let user = await res.json() as User
    
    setUser(user)
  }

  useEffect(()=>{
    fetchUser()
  },[])

  return <h1>Hello, Next.js! {`${user.hihi}`}</h1>
}