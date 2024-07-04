"use client";
import { useState, useEffect } from "react";
import ImageNoData from "../../../../assets/noData.png";
import Image from "next/image";
import SkeletonPemilik from "@/components/skeletonPemilik";
import { usePathname } from "next/navigation";
import Menu from "@/components/menu";
import CardManajemenProperti from "@/components/cardManajemenProperti";


export default function PengajuanSewa() {
  const [loading, setLoading] = useState(true);
  let data : any = []
  const [dataPengajuan, setDataPengajuan] = useState(data);

  const fetchRiwayatPengajuan = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_SERVER + '/api/bookings', { cache: 'no-store', })
    const data  = await response.json()

    if(data) {
      setLoading(false)
    }
    setDataPengajuan(data)
  }

  console.log(dataPengajuan)

  useEffect(() => {
    fetchRiwayatPengajuan();
  }, []);

  return (
    <>
      <Menu />
      <div className="flex flex-wrap mb-5 w-11/12 m-auto mt-28">
        {loading ? (
          Array.from({ length: 4 }).map((_: any, index: any) => (
            <SkeletonPemilik key={index} />
          ))
        ) : dataPengajuan.length === 0 ? (
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
            {dataPengajuan.map((riwayat : any, index: any) => (
              <CardManajemenProperti key={index} property={riwayat} />
            ))}
          </>
        )}
      </div>
    </>
  );
}
