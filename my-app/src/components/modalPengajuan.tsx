
export default function ModalPengajuan() {
  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className=" py-3 font-bold text-lg text-black">
            Form Pengajuan Sewa
          </h3>
          <form method="dialog">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nama"
              >
                Nama
              </label>
              <input
                id="nama"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="durasi">
                Durasi
              </label>
              <select 
                id="durasi" 
                className="select select-bordered shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100" 
                defaultValue="">
                <option value="" disabled hidden>
                  Pilih Durasi
                </option>
                <option value="3 bulan">3 Bulan</option>
                <option value="6 bulan">6 Bulan</option>
                <option value="1 tahun">1 Tahun</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="tanggal">
                Tanggal
              </label>
              <input
                id="tanggal"
                type="date"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"/>
            </div>
            <div className="modal-action">
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "0.375rem",
                  backgroundColor: "#f97316",
                  color: "white",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fb923c")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f97316")
                }>
                Ajukan
              </button>
              <button
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "0.375rem",
                  backgroundColor: "#6b7280",
                  color: "white",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#9ca3af")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#6b7280")
                }>
                Batal
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
