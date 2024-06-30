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

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setDataPropertiSaya([
        {
          "nama": "Kost Merpati",
          "slug": "Kost-Merpati",
          "alamat": "Jl. Merpati No. 12, Jakarta",
          "thumbnail":
            "https://i.pinimg.com/564x/39/54/03/3954034532271e8ef96cadaf23c911ef.jpg",
          "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Dapur Bersama"],
          "status": "Tersedia",
          "images": [
            "https://i.pinimg.com/564x/25/ca/b1/25cab1173dd014d9760158d8e8f50ab7.jpg",
            "https://loremflickr.com/400/400/nightlife",
            "https://loremflickr.com/400/400/food",
            "https://loremflickr.com/400/400/transport",
            "https://loremflickr.com/400/400/food",
          ],
          "type": "Cewek",
          // "statusPengajuan": "Menunggu",
          "harga": 1500000,
        },
        {
          "nama": "Kost Merpati",
          "slug": "Kost-Merpati",
          "alamat": "Jl. Merpati No. 12, Jakarta",
          "thumbnail":
            "https://i.pinimg.com/564x/39/54/03/3954034532271e8ef96cadaf23c911ef.jpg",
          "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Dapur Bersama"],
          "status": "Tersedia",
          "images": [
            "https://i.pinimg.com/564x/25/ca/b1/25cab1173dd014d9760158d8e8f50ab7.jpg",
            "https://loremflickr.com/400/400/nightlife",
            "https://loremflickr.com/400/400/food",
            "https://loremflickr.com/400/400/transport",
            "https://loremflickr.com/400/400/food",
          ],
          "type": "Cewek",
          // "statusPengajuan": "Disetujui",
          "harga": 1500000,
        },
        {
          "nama": "Kontrakan Merpati",
          "slug": "Kontrakan-Merpati",
          "status": "Penuh",
          "description":
            "Aksesoris / dekorasi pada foto kamar hanya untuk keperluan fotografi. Fasilitas yang akan didapatkan sesuai dengan informasi fasilitas pada detail iklan. Warna sprei yang akan disediakan tidak sama dengan warna sprei pada foto",
          "alamat": "Jl. Merpati No. 12, Jakarta",
          "thumbnail":
            "https://i.pinimg.com/564x/16/bd/c1/16bdc1dd3ade930defa40f7a34a0102c.jpg",
          "fasilitas": ["WiFi", "AC"],
          "spesifikasi": [],
          "peraturan": [],
          "images": [
            "https://i.pinimg.com/564x/16/bd/c1/16bdc1dd3ade930defa40f7a34a0102c.jpg",
            "https://i.pinimg.com/564x/3a/95/0b/3a950baf9e56a99a4fe369784ff6e412.jpg",
            "https://i.pinimg.com/564x/46/0d/3b/460d3b851b7a3647daac96ef141a0326.jpg",
            "https://i.pinimg.com/564x/25/ca/b1/25cab1173dd014d9760158d8e8f50ab7.jpg",
          ],
          "type": "Kontrakan/Rumah",
          "kontak": "08987654321",
          // "statusPengajuan": "Tidak Disetujui",
          "harga": 1500000,
        },
      ]);
      setLoading(false);
    }, 1000); // Simulate a 2-second data fetch
  }, []);
  
  return (
    <>
     <div className="flex w-[1090px] border-b border-gray-300 fixed top-0 z-10 ml-2 mb-24 bg-white ">
              <h3 className="font-semibold text-white mt-3 mb-8 ml-10 ">PROPERTI SAYA</h3>
            </div>
     <div className="flex w-[1090px] border-b border-t border-gray-300 fixed top-16 z-10 ml-2 mb-20 bg-white ">
            <h3 className="font-semibold text-black mt-3 mb-2 ml-9 ">PROPERTI SAYA</h3>
            <Link href="/tambah-properti" className="text-blue-600 flex font-semibold ml-auto mt-3 mb-2 mr-5"><BsFillHouseAddFill className="h-5 w-5 mr-1"/>Tambah Properti</Link>
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
