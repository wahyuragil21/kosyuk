"use client";

import Link from "next/link";
import Image from "next/image";
import { GiRoundStar } from "react-icons/gi";

export default function CardProperty({ property} : {property: any}) {
  return (
    <>
      <div className="card bg-white w-1/4 relative overflow-hidden transform transition-transform duration-500 hover:shadow-lg flex flex-col mt-5">
        <Link href={`/kost/${property.slug}`}>
          <Image
            src={property?.thumbnail}
            className="rounded-md w-[295px] h-48 object-cover"
            alt="Carousel Item"
            width={500}
            height={500}
          />
        </Link>
        <div className="flex-1 relative">
          <div className="flex items-center mt-2">
            <button className="flex items-center justify-center text-black font-semibold py-0 px-1 mt-1 mb-2 rounded-lg border border-gray-300">
              {property.type}
            </button>
            <GiRoundStar className={`m-2 w-4 h-4 text-blue-600`} />{" "}
            <span className="text-blue-600">0</span>
          </div>
          <h1 className="font-sans text-black">{property.nama}</h1>
            <h1 className="font-sans text-black font-semibold text-justify overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[300px]">
              {property.alamat.split(" ").slice(-1).join(" ")}
            </h1>
            <h1 className="font-sans text-gray-400 text-xs text-justify overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[300px]">
              {property.fasilitas.join(", ")}
            </h1>
            <h1 className="font-sans text-lg font-semibold text-black">
              Rp. {property.harga.toLocaleString("id-ID")}
            </h1>
        </div>
      </div>
    </>
  );
}
