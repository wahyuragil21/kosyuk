'use client'
import BannerAdsKost from "@/components/bannerAdsKost";
import CardProperty from "@/components/cardProperty";
import Footer from "@/components/footer";
import Skeleton from "@/components/skeleton";
import { useEffect, useState } from "react";

export default function Kontrakan() {

   const [kontrakans, setKontrakans] = useState([]);

  const getKontrakan = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_SERVER + '/api/carrousels?category=kontrakan', { cache: 'no-store', })
    const data  = await response.json()
    setKontrakans(data)
  }

  useEffect(() => {
    getKontrakan();
  }, []);


    return (
        <>
        <BannerAdsKost />
            <div className="flex flex-wrap mb-5 w-11/12 m-auto">
                {kontrakans.length == 0 ?
                    (
                        Array.from({ length: 8 }).map((_, index) => (
                            <Skeleton key={index} />
                        ))
                    )
                    : (
                        kontrakans.map((kontrakans, index) => (
                            <CardProperty key={index} property={kontrakans} />
                        ))
                    )}
            </div>
            <Footer />
        </>
    )
}