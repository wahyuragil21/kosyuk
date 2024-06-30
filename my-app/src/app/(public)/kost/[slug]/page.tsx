"use client";
import ContentDetailKost from "@/components/contentDetailKost";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function KostanDetail({ params }: { params: { slug: string } }) {
  const [isLoginPage, setIsLoginPage] = useState("");
  const [kosts, setKosts] = useState([]);

  const getKosts = async () => {
    const slug = params.slug;
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL_SERVER + `/api/buildings/users/${slug}`,
      { cache: "no-store" }
    );
    const data = await response.json();
    setKosts(data)
  };

  const isLogin : boolean = isLoginPage ? true : false;

  useEffect(() => {
    getKosts();
    const cookies: any = document.cookie.split(";");
    setIsLoginPage(cookies);
  }, [params.slug]);


  return (
    <>
      <div className="flex flex-wrap mb-3 mt-5 w-11/12 m-auto">
        <ContentDetailKost kosts={kosts} isLogin={isLogin}/>
      </div>
      <Footer />
    </>
  );
}
