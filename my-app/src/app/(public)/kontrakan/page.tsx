'use client'
import BannerAdsKost from "@/components/bannerAdsKost";
import CardProperty from "@/components/cardProperty";
import Footer from "@/components/footer";
import Skeleton from "@/components/skeleton";

export default function Kontrakan() {
    const kontrakans = [
        {
          "nama": "Kontrakan Merpati",
          "alamat": "Jl. Merpati No. 12, Jakarta",
          "slug": "Kontrakan-Merpati",
          "thumbnail": "https://i.pinimg.com/564x/16/bd/c1/16bdc1dd3ade930defa40f7a34a0102c.jpg",
          "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Dapur Bersama"],
          "type" : "Rumah/Kontrakan",
          "harga": 1500000
        },
        {
          "nama": "Kontrakan Cendrawasih",
          "alamat": "Jl. Cendrawasih No. 45, Bandung",
          "slug": "Kontrakan-Cendrawasih",
          "thumbnail": "https://i.pinimg.com/564x/43/1e/1b/431e1b125907a895be3016107fe687c8.jpg",
          "fasilitas": ["WiFi", "AC", "Lemari", "Meja Belajar"],
          "type" : "Rumah/Kontrakan",
          "harga": 1200000
        },
        {
          "nama": "Kontrakan Elang",
          "alamat": "Jl. Elang No. 22, Surabaya",
          "slug": "Kontrakan-Elang",
          "thumbnail": "https://i.pinimg.com/564x/ae/25/20/ae25209ba58e9b5c994a47b0df79d68a.jpg",
          "fasilitas": ["WiFi", "Kamar Mandi Dalam", "Laundry", "Dapur Bersama"],
          "type" : "Rumah/Kontrakan",
          "harga": 1300000
        },
        {
          "nama": "Kontrakan Rajawali",
          "slug": "Kontrakan-Rajawali",
          "alamat": "Jl. Rajawali No. 30, Yogyakarta",
          "thumbnail": "https://i.pinimg.com/564x/56/6c/9f/566c9fc3a02f1eab2623016474512f5d.jpg",
          "fasilitas": ["WiFi", "AC", "Kolam Renang", "Gym"],
          "type" : "Rumah/Kontrakan",
          "harga": 2000000
        },
        {
          "nama": "Kontrakan Garuda",
          "alamat": "Jl. Garuda No. 17, Bali",
          "slug": "Kontrakan-Garuda",
          "thumbnail": "https://i.pinimg.com/564x/4e/85/d8/4e85d8d1cd862c64a7fbf206e2d069e5.jpg",
          "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Parkir Motor"],
          "type" : "Rumah/Kontrakan",
          "harga": 1800000
        },
        {
          "nama": "Kontrakan Merpati",
          "alamat": "Jl. Merpati No. 12, Jakarta",
          "slug": "Kontrakan-Merpati",
          "thumbnail": "https://i.pinimg.com/564x/16/bd/c1/16bdc1dd3ade930defa40f7a34a0102c.jpg",
          "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Dapur Bersama"],
          "type" : "Rumah/Kontrakan",
          "harga": 1500000
        },
        {
          "nama": "Kontrakan Cendrawasih",
          "alamat": "Jl. Cendrawasih No. 45, Bandung",
          "slug": "Kontrakan-Cendrawasih",
          "thumbnail": "https://i.pinimg.com/564x/43/1e/1b/431e1b125907a895be3016107fe687c8.jpg",
          "fasilitas": ["WiFi", "AC", "Lemari", "Meja Belajar"],
          "type" : "Rumah/Kontrakan",
          "harga": 1200000
        },
        {
          "nama": "Kontrakan Elang",
          "alamat": "Jl. Elang No. 22, Surabaya",
          "slug": "Kontrakan-Elang",
          "thumbnail": "https://i.pinimg.com/564x/ae/25/20/ae25209ba58e9b5c994a47b0df79d68a.jpg",
          "fasilitas": ["WiFi", "Kamar Mandi Dalam", "Laundry", "Dapur Bersama"],
          "type" : "Rumah/Kontrakan",
          "harga": 1300000
        },
        {
          "nama": "Kontrakan Rajawali",
          "slug": "Kontrakan-Rajawali",
          "alamat": "Jl. Rajawali No. 30, Yogyakarta",
          "thumbnail": "https://i.pinimg.com/564x/56/6c/9f/566c9fc3a02f1eab2623016474512f5d.jpg",
          "fasilitas": ["WiFi", "AC", "Kolam Renang", "Gym"],
          "type" : "Rumah/Kontrakan",
          "harga": 2000000
        },
        {
          "nama": "Kontrakan Garuda",
          "alamat": "Jl. Garuda No. 17, Bali",
          "slug": "Kontrakan-Garuda",
          "thumbnail": "https://i.pinimg.com/564x/4e/85/d8/4e85d8d1cd862c64a7fbf206e2d069e5.jpg",
          "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Parkir Motor"],
          "type" : "Rumah/Kontrakan",
          "harga": 1800000
        },
        {
          "nama": "Kontrakan Cendrawasih",
          "alamat": "Jl. Cendrawasih No. 45, Bandung",
          "slug": "Kontrakan-Cendrawasih",
          "thumbnail": "https://i.pinimg.com/564x/43/1e/1b/431e1b125907a895be3016107fe687c8.jpg",
          "fasilitas": ["WiFi", "AC", "Lemari", "Meja Belajar"],
          "type" : "Rumah/Kontrakan",
          "harga": 1200000
        },
        {
          "nama": "Kontrakan Elang",
          "alamat": "Jl. Elang No. 22, Surabaya",
          "slug": "Kontrakan-Elang",
          "thumbnail": "https://i.pinimg.com/564x/ae/25/20/ae25209ba58e9b5c994a47b0df79d68a.jpg",
          "fasilitas": ["WiFi", "Kamar Mandi Dalam", "Laundry", "Dapur Bersama"],
          "type" : "Rumah/Kontrakan",
          "harga": 1300000
        }
      ]
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