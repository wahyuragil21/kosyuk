'use client'
import ContentDetailKontrakan from "@/components/contentDetailKontrakan";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function KontrakanDetail({ params }: { params: { slug: string } }) {

  const [isLoginPage, setIsLoginPage] = useState("");

  const [kontrakan, setKontrakan] = useState([]);

  const getKontrakan = async () => {
    const slug = params.slug;
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL_SERVER + `/api/buildings/${slug}`,
      { cache: "no-store" }
    );
    const data = await response.json();
    console.log(data);
    setKontrakan(data)
  };

  const isLogin : boolean = isLoginPage ? true : false;

  useEffect(() => {
    getKontrakan();
    const cookies: any = document.cookie.split(";");
    setIsLoginPage(cookies);
  }, [params.slug]);
      
    return (
        <>
            <div className="flex flex-wrap mb-3 mt-5 w-11/12 m-auto">
                <ContentDetailKontrakan kontrakan={kontrakan} isLogin={isLogin}/>
            </div>
            <Footer />
        </>
    )
}