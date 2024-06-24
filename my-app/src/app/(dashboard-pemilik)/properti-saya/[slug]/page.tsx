"use client";
import FormTambahProperti from "@/components/formTambahProperti";

export default function DetailPropertiPemilik() {
  const kosts = [
    {
      nama: "Kost Merpati",
      slug: "Kost-Merpati",
      status: "Tersedia",
      description:
        "Aksesoris / dekorasi pada foto kamar hanya untuk keperluan fotografi. Fasilitas yang akan didapatkan sesuai dengan informasi fasilitas pada detail iklan. Warna sprei yang akan disediakan tidak sama dengan warna sprei pada foto",
      alamat: "Jl. Merpati No. 12, Jakarta",
      thumbnail:
        "https://i.pinimg.com/564x/39/54/03/3954034532271e8ef96cadaf23c911ef.jpg",
      fasilitas: ["WiFi", "AC", "Kamar Mandi Dalam", "Dapur Bersama"],
      images: [
        "https://i.pinimg.com/564x/39/54/03/3954034532271e8ef96cadaf23c911ef.jpg",
        "https://i.pinimg.com/564x/3a/95/0b/3a950baf9e56a99a4fe369784ff6e412.jpg",
        "https://i.pinimg.com/564x/46/0d/3b/460d3b851b7a3647daac96ef141a0326.jpg",
        "https://i.pinimg.com/564x/25/ca/b1/25cab1173dd014d9760158d8e8f50ab7.jpg",
      ],
      type: "Cewek",
      harga: 1500000,
    },
  ];

  return (
    <>
      <FormTambahProperti />
    </>
  );
}
