"use client";
import { useState, useEffect } from "react";
import ImageNoData from "../../../assets/noDataProperti.png"
import Image from "next/image";
import CardPropertiPemilik from "@/components/cardPropertiPemilik";
import SkeletonPemilik from "@/components/skeletonPemilik";
import Link from "next/link";
import { BsFillHouseAddFill } from "react-icons/bs";

export default function PropertiSaya() {
  const [loading, setLoading] = useState(true);
  let data : any = []
  const [propertiSaya, setDataPropertiSaya] = useState(data);

  const getProperty = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_SERVER + '/api/buildings/providers', { cache: 'no-store', })
    const data  = await response.json()

    if(data) {
      setLoading(false)
    }
    
    setDataPropertiSaya(data)
  }

  useEffect(() => {
    getProperty();
  }, []);
  
  return (
    <>
     <div className="flex w-[1090px] border-b border-gray-300 fixed top-0 z-10 ml-2 mb-24 bg-white ">
              <h3 className="font-semibold text-white mt-3 mb-8 ml-10 ">PROPERTI SAYA</h3>
            </div>
     <div className="flex w-[1090px] border-b border-t border-gray-300 fixed top-16 z-10 ml-2 mb-20 bg-white ">
            <h3 className="font-bold text-black mt-3 mb-2 ml-9 ">PROPERTI SAYA</h3>
            <Link href="/tambah-properti" className="text-blue-600 flex font-semibold ml-auto mt-3 mb-2 mr-14"><BsFillHouseAddFill className="h-5 w-5 mr-1"/>Tambah Properti</Link>
            </div>
      <div className="flex flex-wrap mb-5 w-11/12 m-auto mt-24">
        {loading ? (
            Array.from({ length: 4 }).map((_, index) => <SkeletonPemilik key={index} />)
        ) : propertiSaya.length === 0 ? (
            <div className="flex flex-col justify-center items-center text-center text-black font-semi-bold h-full py-48 mx-auto">
            <Image
            src={ImageNoData}
            className="rounded-md w-[300px] h-52 object-cover"
            alt="Carousel Item"
            width={500}
            height={500}
          />
          </div>
        ) : (
            <>
            {propertiSaya.map((properti : any, index : any) => (
            <CardPropertiPemilik key={index} property={properti} />
          ))}
            </>
        )}
      </div>
    </>
  );
}
