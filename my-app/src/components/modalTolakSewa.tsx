export default function ModalTolakSewa() {
    return (
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <h3 className=" py-3 font-bold text-lg text-black">
            Tolak Pengajuan Sewa
          </h3>
          <form method="dialog">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="noRekening"
              >
                Catatan :
              </label>
            <textarea className="textarea textarea-bordered bg-slate-100 text-gray-700 w-full" placeholder="Contoh : Maaf sewa anda kami tolak karena sudah penuh"></textarea>
           
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