export default function ModalTerimaSewa() {
    
    return (
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white">
          <h3 className=" py-3 font-bold text-lg text-black">
            Terima Pengajuan Sewa
          </h3>
          <form method="dialog">
          <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="noRekening"
              >
                Nama Pemilik :
              </label>
              <input
                id="noRekening"
                type="text"
                placeholder="John Doe"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="noRekening"
              >
                No Rekening - Bank :
              </label>
              <input
                id="noRekening"
                type="text"
                placeholder="1234567890 - BCA"
                className="text-base hadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
              />
            </div>
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="noRekening"
              >
                Catatan :
              </label>
            <textarea className="textarea textarea-bordered bg-slate-100 text-gray-700 w-full" placeholder="Contoh : Silahkan melakukan pembayaran sewa paling lambat 3 hari setelah pemesanan"></textarea>
           
            <div className="modal-action">
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  border: "none",
                  borderRadius: "0.375rem",
                  backgroundColor: "#22C55E",
                  color: "white",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#4ADE80")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#22C55E")
                }>
                Kirim
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
    )
}