'use client'
import BannerAdsKost from "@/components/bannerAdsKost";
import CardKost from "@/components/cardCost";
import Footer from "@/components/footer";
import NavbarProduct from "@/components/navbar";
import Skeleton from "@/components/skeleton";

export default function Kostan() {
    const kosts = [
        {
          "nama": "Kost Merpati",
          "alamat": "Jl. Merpati No. 12, Jakarta",
          "thumbnail": "https://i.pinimg.com/564x/39/54/03/3954034532271e8ef96cadaf23c911ef.jpg",
          "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Dapur Bersama"],
          "type" : "Cewek",
          "harga": 1500000
        },
        {
          "nama": "Kost Cendrawasih",
          "alamat": "Jl. Cendrawasih No. 45, Bandung",
          "thumbnail": "https://i.pinimg.com/564x/6f/66/f7/6f66f782f4b4fb3fab18ce2f6d3e3857.jpg",
          "fasilitas": ["WiFi", "AC", "Lemari", "Meja Belajar"],
          "type" : "Cewek",
          "harga": 1200000
        },
        {
          "nama": "Kost Elang",
          "alamat": "Jl. Elang No. 22, Surabaya",
          "thumbnail": "https://i.pinimg.com/564x/f3/26/56/f326567e2af20233e8dd18cc685b7d4d.jpg",
          "fasilitas": ["WiFi", "Kamar Mandi Dalam", "Laundry", "Dapur Bersama"],
          "type" : "Campur",
          "harga": 1300000
        },
        {
          "nama": "Kost Rajawali",
          "alamat": "Jl. Rajawali No. 30, Yogyakarta",
          "thumbnail": "https://i.pinimg.com/564x/df/15/83/df1583b815a61030450d7b3c5c1e4af7.jpg",
          "fasilitas": ["WiFi", "AC", "Kolam Renang", "Gym"],
          "type" : "Campur",
          "harga": 2000000
        },
        {
          "nama": "Kost Garuda",
          "alamat": "Jl. Garuda No. 17, Bali",
          "thumbnail": "https://i.pinimg.com/564x/ad/67/12/ad67124773b2f23b6203cbc4442229bf.jpg",
          "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Parkir Motor"],
          "type" : "Laki-laki",
          "harga": 1800000
        }
      ]

    return (
        <>
        <NavbarProduct />
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
                            <CardKost key={index} kosts={kosts} />
                        ))
                    )}
            </div>
            <Footer />
        </>
    )
}