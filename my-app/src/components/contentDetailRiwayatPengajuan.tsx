import DetailImage from "./detailImage";
import { GiRoundStar } from "react-icons/gi";

export default function ContentDetailRiwayatPengajuan({ property }) {
  return (
    <div className="bg-white py-8">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <DetailImage imageBuilding={property} />
          <div className="md:flex-1 px-4 flex flex-col justify-between relative text-black">
            <div>
              <h2 className="text-2xl font-bold text-black">{property.nama}</h2>
              <div className="flex mb-2">
                <div className="mr-4">
                  <div className="flex items-center mt-2">
                    <button className="flex items-center justify-center text-black font-semibold py-0 px-1 mt-1 mb-2 mr-2 rounded-lg border border-gray-300">
                      {property.status}
                    </button>
                    <button className="flex items-center justify-center text-black font-semibold py-0 px-1 mt-1 mb-2 rounded-lg border border-gray-300">
                      {property.type}
                    </button>
                    <GiRoundStar className={`m-2 w-4 h-4 text-orange-500`} />{" "}
                    <span className="text-orange-500 mr-2">0</span>{" "}
                    <span>{property.alamat}</span>
                  </div>
                </div>
              </div>

              <span className="font-bold">Spesifikasi :</span>
              <p className="text-sm mt-2 mb-2 text-justify">
                {property.spesifikasi.length > 0
                  ? property.spesifikasi.join(", ")
                  : "-"}
              </p>

              <span className="font-bold">Fasilitas :</span>
              <p className="text-sm mt-2 mb-2 text-justify">
                {property.fasilitas.length > 0
                  ? property.fasilitas.join(", ")
                  : "-"}
              </p>

              <span className="font-bold">Peraturan :</span>
              <p className="text-sm mt-2 mb-2 text-justify">
                {property.peraturan.length > 0
                  ? property.peraturan.join(", ")
                  : "-"}
              </p>
              <div>
                <span className="font-bold">Deskripsi Kost:</span>
                <p className="text-sm mt-2 text-justify">
                  {property.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex -mx-2 mb-2">
                    <div className="w-full px-2">
                      <label className="block text-black font-bold mb-2">
                        Informasi
                      </label>
                      <div
                        className="w-full p-2 border rounded bg-white text-black"
                        style={{ height: "70px", overflowY: "auto" }}
                      >
                        {property.statusPengajuan === "Menunggu" && (
                          <p className="text-sm mt-2 text-justify">
                            Pengajuan anda masih dalam status{" "}
                            <span className="text-orange-500 font-bold">
                              {property.statusPengajuan}
                            </span>{" "}
                            persetujuan dari pihak pemilik kos.
                          </p>
                        )}
                        {property.statusPengajuan === "Disetujui" && (
                          <p className="text-sm mt-2 text-justify">
                            Pengajuan anda{" "}
                            <span className="text-green-500 font-bold">
                              {property.statusPengajuan}
                            </span>
                            , Silahkan cek email anda untuk melakukan pembayaran
                            dan informasi lebih lanjut.
                          </p>
                        )}
                        {property.statusPengajuan === "Tidak Disetujui" && (
                          <p className="text-sm mt-2 text-justify">
                            Pengajuan anda{" "}
                            <span className="text-red-500 font-bold">
                              {property.statusPengajuan}
                            </span>{" "}
                            dikarenakan sudah Penuh/Tidak Tersedia.
                          </p>
                        )}
                        {!property.statusPengajuan && <p>Informasi</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
