"use client";
import FormDetailProperti from "@/components/formDetailProperty";
import { useEffect, useState } from "react";

export default function DetailPropertiPemilik({
  params,
}: {
  params: { slug: string };
}) {

  const [dataProperty, setDataProperty] = useState({});

  const fetchProperty = async () => {
    const slug = params.slug;
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL_SERVER + `/api/buildings/users/${slug}`,
      { cache: "no-store" }
    );
    const data = await response.json();
    setDataProperty(data);
  };
  
  useEffect(() => {
    fetchProperty();
  }, [params.slug]);
  
  return (
    <>
      <FormDetailProperti dataProperty={dataProperty}/>
    </>
  );
}
