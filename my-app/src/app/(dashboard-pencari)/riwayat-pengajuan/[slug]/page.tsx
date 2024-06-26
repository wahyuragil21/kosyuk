"use client";
import ContentDetailRiwayatPengajuan from "@/components/contentDetailRiwayatPengajuan";
import Footer from "@/components/footer";

export default function DetailRiwayatPengajuan() {
  const riwayatPengajuan = [
    {
      nama: "Kontrakan Merpati",
      slug: "Kontrakan-Merpati",
      status: "Tersedia",
      description:
        "Aksesoris / dekorasi pada foto kamar hanya untuk keperluan fotografi. Fasilitas yang akan didapatkan sesuai dengan informasi fasilitas pada detail iklan. Warna sprei yang akan disediakan tidak sama dengan warna sprei pada foto, Fasilitas yang akan didapatkan sesuai dengan informasi fasilitas pada detail iklan. Warna sprei yang akan disediakan tidak sama dengan warna sprei pada foto hanya untuk keperluan fotografi. Fasilitas yang akan didapatkan sesuai dengan informasi fasilitas pada detail iklan. Warna sprei yang akan disediakan tidak sama dengan warna sprei pada foto, Fasilitas yang akan didapatkan sesuai dengan informasi fasilitas pada detail iklan. Warna sprei yang akan disediakan tidak sama dengan warna sprei pada foto",
      alamat: "Jl. Merpati No. 12, Jakarta",
      thumbnail:
        "https://i.pinimg.com/564x/16/bd/c1/16bdc1dd3ade930defa40f7a34a0102c.jpg",
      fasilitas: ["WiFi", "AC"],
      spesifikasi: [],
      peraturan: [],
      images: [
        "https://i.pinimg.com/564x/16/bd/c1/16bdc1dd3ade930defa40f7a34a0102c.jpg",
        "https://i.pinimg.com/564x/3a/95/0b/3a950baf9e56a99a4fe369784ff6e412.jpg",
        "https://i.pinimg.com/564x/46/0d/3b/460d3b851b7a3647daac96ef141a0326.jpg",
        "https://i.pinimg.com/564x/25/ca/b1/25cab1173dd014d9760158d8e8f50ab7.jpg",
      ],
      type: "Kontrakan/Rumah",
      kontak: "08987654321",
      statusPengajuan: "Disetujui",
      harga: 1500000,
    },
  ];

  return (
    <>
      <div className="flex flex-wrap mb-3 mt-5 w-11/12 m-auto">
        <ContentDetailRiwayatPengajuan property={riwayatPengajuan[0]} />
      </div>
      <Footer />
    </>
  );
}
