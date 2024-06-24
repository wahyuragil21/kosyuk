"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import ModalTerimaSewa from "./modalTerimaSewa";
import ModalTolakSewa from "./modalTolakSewa";

export default function CardManajemenProperti({ property }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Tersedia":
        return "text-green-500";
      case "Penuh":
        return "text-red-500";
      default:
        return "text-black";
    }
  };

  const openModal = () => {
    document.getElementById("my_modal_2").showModal();
  };
  const openModalTolak = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const pathname = usePathname();

  return (
    <div className="card card-side bg-slate-100 shadow-xl w-full mt-5">
      <figure className="w-48 h-48 overflow-hidden">
        <Image
          src={property?.thumbnail}
          alt="Property Image"
          width={200}
          height={192}
          className="w-64 h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-black font-bold">
          {property?.nama}
        </h2>
        <p className={`text-black`}>{property?.alamat}</p>
        <p className={`text-black`}>Penyewa : {property?.penyewa}</p>
        <p className={`text-black`}>Tanggal Masuk : {property?.tanggalPengajuan}</p>
        <p
          className={`text-black font-bold ${getStatusColor(property?.status)}`}
        >
          {property?.status}
        </p>
        <div className="card-actions justify-end">
          {pathname == "/manajemen-properti/pengajuan-sewa" ? (
            <>
              <button className="bg-green-500 text-white py-1 px-3 rounded-lg font-bold hover:bg-green-400" onClick={openModal}>
                Terima
              </button>
              <button className="bg-red-600 text-white py-1 px-3 rounded-lg font-bold hover:bg-red-500" onClick={openModalTolak}>
                Tolak
              </button>
            </>
          ) : (
            <>
              <button className="bg-red-600 text-white py-1 px-3 rounded-lg font-bold hover:bg-red-500">
                Hapus
              </button>
            </>
          )}
        </div>
      </div>
      <ModalTerimaSewa />
      <ModalTolakSewa />
    </div>
  );
}
