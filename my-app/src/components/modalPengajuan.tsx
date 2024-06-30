import { Tangerine } from "next/font/google";
import { useState } from "react";

export default function ModalPengajuan() {
  const [formData, setFormData] = useState({
    nama: "",
    durasi: "",
    tanggal: "",
  })

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {

    console.log(formData);
    closeModal();
  }

  const closeModal = () => {
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.close();
  };

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white">
          <h3 className=" py-3 font-bold text-lg text-black">
            Form Pengajuan Sewa
          </h3>
          <form method="dialog" action={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nama"
              >
                Nama<span className="text-red-500">*</span>
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                placeholder="Masukkan Nama"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="durasi">
                Durasi
              </label>
              <select 
                id="durasi" 
                name="durasi"
                onChange={handleChange}
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
                className="block text-black text-sm font-bold mb-2"
                htmlFor="tanggal">
                Tanggal Masuk<span className="text-red-500">*</span>
              </label>
              <input
                id="tanggal"
                name="tanggal"
                onChange={handleChange}
                type="date"
                placeholder="Pilih Tanggal Masuk"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-100"
                required
                />
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
              type="button" 
              onClick={closeModal}
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
