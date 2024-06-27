'use client'
import BannerAdsKost from "@/components/bannerAdsKost";
import CardProperty from "@/components/cardProperty";
import Footer from "@/components/footer";
import Skeleton from "@/components/skeleton";
import { useEffect, useState } from "react";

export default function Kostan() {

  const [kosts, setKosts] = useState([]);

  const getKosts = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_URL_SERVER + '/api/carrousels?category=kost', { cache: 'no-store', })
    const data  = await response.json()
    setKosts(data)
  }

  useEffect(() => {
    getKosts();
  }, []);

    return (
        <>
        <BannerAdsKost />
            <div className="flex flex-wrap mb-5 w-11/12 m-auto">
                {kosts.length == 0 ?
                    (
                        Array.from({ length: 8 }).map((_, index) => (
                            <Skeleton key={index} />
                        ))
                    )
                    : (
                        kosts.map((kosts, index) => (
                            <CardProperty key={index} property={kosts} />
                        ))
                    )}
            </div>
            <Footer />
        </>
    )
}