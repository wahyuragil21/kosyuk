import { useEffect, useState } from "react";

export default function ModalTerimaSewa({slug} : {slug : any}) {
  const [form, setForm] = useState({
    nama : "",
    rekening: "",
    catatan: "",
    status : "Disetujui",
    slug : ""
  })

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      slug: slug,
    }));
  }, [slug]);

  const handleSubmit = async () => {
    const response = await fetch(
      process.env.NEXT_PUBLIC_URL_SERVER + "/api/bookings",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( form ),
      }
    );
    console.log(form);
    console.log(response);

    if (response.ok) {
      setForm({
        nama : "",
        rekening: "",
        catatan: "",
        status : "",
        slug : ""
      })
      closeModal();
    } else {
      // alert(result.error);
    }
  }

  const closeModal = () => {
    (document.getElementById("my_modal_2") as HTMLDialogElement)?.close();
  };
    
    return (
        <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white">
          <h3 className=" py-3 font-bold text-lg text-black">
            Terima Pengajuan Sewa
          </h3>
          <form method="dialog" action={handleSubmit}>
          <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="noRekening"
              >
                Nama Pemilik :
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                onChange={handleChange}
                placeholder="John Doe"
                value={form.nama}
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
                id="rekening"
                name="rekening"
                value={form.rekening}
                onChange={handleChange}
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
            <textarea name="catatan" id="catatan" onChange={handleChange} value={form.catatan} className="textarea textarea-bordered bg-slate-100 text-gray-700 w-full" placeholder="Contoh : Silahkan melakukan pembayaran sewa paling lambat 3 hari setelah pemesanan"></textarea>
           
            <div className="modal-action">
            <button
                type="submit"
                className="p-2 px-4 rounded-md bg-blue-600 text-white transition-colors duration-300 ease-in-out hover:bg-blue-500"
              >
                Kirim
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 px-4 rounded-md bg-orange-600 text-white transition-colors duration-300 ease-in-out hover:bg-orange-500"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </dialog>
    )
}