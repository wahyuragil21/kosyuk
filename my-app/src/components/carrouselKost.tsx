import Link from "next/link";
import { GiRoundStar } from "react-icons/gi";

export default async function CarrouselKost({ kost }) {
  return (
    <div className="pt-10 pb-10">
  <div className="flex justify-between text-black pb-3">
    <h1 className="text-xl font-semibold">Kost Terlaris</h1>
    <Link
      href="/products"
      className="text-sm text-gray-500 mr-2 hover:text-black"
    >
      View all ❯
    </Link>
  </div>
  <div className="carousel w-full overflow-x-auto space-x-4 bg-white rounded-md flex">
    {kost?.map((value, index) => {
      return (
        <div
          key={index}
          className="carousel-item flex-shrink-0 flex-col bg-white rounded-md w-72">
          <img
            src={value.thumbnail}
            className="rounded-md w-full h-48 object-cover"
            alt="Carousel Item"
            width={500} 
            height={500}
          />
          <div className="mt-2 mb-5">
          <div className="flex items-center">
            <button className="flex items-center justify-center text-black font-semibold py-0 px-1 mt-1 mb-2 rounded-lg border border-gray-300">
              {value.type}
            </button>
            <GiRoundStar className={`m-2 w-4 h-4 text-blue-600`}/> <span className="text-blue-600">0</span>
            </div>
            <h1 className="font-sans text-black">{value.nama}</h1>
            <h1 className="font-sans text-black font-semibold text-justify overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[300px]">
              {value.alamat.split(" ").slice(-1).join(" ")}
            </h1>
            <h1 className="font-sans text-gray-400 text-xs text-justify overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[300px]">
              {value.fasilitas.join(", ")}
            </h1>
            <h1 className="font-sans text-lg font-semibold text-black">
              Rp. {value.harga.toLocaleString("id-ID")}
            </h1>
          </div>
        </div>
      );
    })}
  </div>
</div>

  );
}
