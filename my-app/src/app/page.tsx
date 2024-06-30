import CarrouselKost from "@/components/carrouselKost";
import CarrouselKontrakan from "@/components/carrouselKontrakan";
import Footer from "@/components/footer";
import Ads from "@/components/bannerAds";
import Skeleton from "@/components/skeleton";
import HeroProfileWeb from "@/components/heroProfileWeb";
import NavbarProduct from "@/components/navbar";

async function getDataKost() {
  const response = await fetch('http://localhost:3000/api/buildings/users', { cache: 'no-store', })
  const data  = await response.json()
  return data.slice(0, 6); 
}

async function getDataKontrakan() {
  const response = await fetch('http://localhost:3000/api/buildings/users', { cache: 'no-store', })
  const data  = await response.json()
  return data.slice(0, 6); 
}

export default async function Home() {
  const kosts = await getDataKost()
  const kontrakans = await getDataKontrakan()
  console.log(kosts)
  const kost = [
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

  const kontrakan = [
    {
      "nama": "Kost Merpati",
      "alamat": "Jl. Merpati No. 12, Jakarta",
      "thumbnail": "https://i.pinimg.com/564x/16/bd/c1/16bdc1dd3ade930defa40f7a34a0102c.jpg",
      "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Dapur Bersama"],
      "type" : "Cewek",
      "harga": 1500000
    },
    {
      "nama": "Kost Cendrawasih",
      "alamat": "Jl. Cendrawasih No. 45, Bandung",
      "thumbnail": "https://i.pinimg.com/564x/43/1e/1b/431e1b125907a895be3016107fe687c8.jpg",
      "fasilitas": ["WiFi", "AC", "Lemari", "Meja Belajar"],
      "type" : "Cewek",
      "harga": 1200000
    },
    {
      "nama": "Kost Elang",
      "alamat": "Jl. Elang No. 22, Surabaya",
      "thumbnail": "https://i.pinimg.com/564x/ae/25/20/ae25209ba58e9b5c994a47b0df79d68a.jpg",
      "fasilitas": ["WiFi", "Kamar Mandi Dalam", "Laundry", "Dapur Bersama"],
      "type" : "Campur",
      "harga": 1300000
    },
    {
      "nama": "Kost Rajawali",
      "alamat": "Jl. Rajawali No. 30, Yogyakarta",
      "thumbnail": "https://i.pinimg.com/564x/56/6c/9f/566c9fc3a02f1eab2623016474512f5d.jpg",
      "fasilitas": ["WiFi", "AC", "Kolam Renang", "Gym"],
      "type" : "Campur",
      "harga": 2000000
    },
    {
      "nama": "Kost Garuda",
      "alamat": "Jl. Garuda No. 17, Bali",
      "thumbnail": "https://i.pinimg.com/564x/4e/85/d8/4e85d8d1cd862c64a7fbf206e2d069e5.jpg",
      "fasilitas": ["WiFi", "AC", "Kamar Mandi Dalam", "Parkir Motor"],
      "type" : "Laki-laki",
      "harga": 1800000
    }
  ]

  const isLogin = false
  return (
    <>
    <NavbarProduct isLogin={isLogin as any}/>
      <div className="w-11/12 m-auto">

        <Ads />
        <CarrouselKost kost={kost} />
        <CarrouselKontrakan kontrakan={kontrakan} />
      </div>  
        <HeroProfileWeb />
        <Footer />
    </>
  )
}
