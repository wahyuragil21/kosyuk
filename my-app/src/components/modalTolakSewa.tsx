import { useEffect, useState } from "react"

export default function ModalTolakSewa({slug} : {slug : any}) {

  const [form, setForm] = useState({
    catatan: "",
    status : "Tidak Disetujui",
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
    (document.getElementById("my_modal_3") as HTMLDialogElement)?.close();
  };

    return (
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <h3 className=" py-3 font-bold text-lg text-black">
            Tolak Pengajuan Sewa
          </h3>
          <form method="dialog" action={handleSubmit}>
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="noRekening"
              >
                Catatan :
              </label>
            <textarea className="textarea textarea-bordered bg-slate-100 text-gray-700 w-full" onChange={handleChange} value={form.catatan} placeholder="Contoh : Maaf sewa anda kami tolak karena sudah penuh"></textarea>
           
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