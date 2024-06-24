"use client"

import { useState } from "react"
import MapComponent from "../components/map"

export default function Map(){


  const [loading,setLoading] = useState(true)
  const [address, setAddress] = useState("Jalan Citarum Raya No. 4, Depok")

  return (
    <>
    <MapComponent loading={loading} setLoading={setLoading} address={address} />
    <form action="" method="post">
      <label htmlFor="">tes</label>
      <input type="text" defaultValue={address} onChange={(e: any)=>setAddress(e.target.value)}/>
    </form>
    </>
  )
}