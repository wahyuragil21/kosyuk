"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function FormTambahProperti() {
  const [formData, setFormData] = useState({
    namaProperti: "",
    alamat: "",
    thumbnail: "",
    images: [],
    harga: "",
    deskripsi: "",
    kategori: "",
    type: "",
    fasilitas: "",
    peraturan: "",
    fasilitasPreview : [],
    peraturanPreview : []
   
  });

  
  const [imagePreviews, setImagePreviews] = useState([]);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);

  const pathname = usePathname();

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e : any) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: files,
    });
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleRemoveImages = (index : any) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);

    setFormData({
      ...formData,
      images: newImages,
    });
    setImagePreviews(newPreviews);

    // Reset the file input value and update the label
    const fileInput = document.getElementById("images");
    if (newImages.length === 0) {
      fileInput.value = null;
    } else {
      const dataTransfer = new DataTransfer();
      newImages.forEach((file) => dataTransfer.items.add(file));
      fileInput.files = dataTransfer.files;
    }
  };

  const handleThumbnailChange = (e : any) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      thumbnail: file,
    });
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleRemoveThumbnail = () => {
    setFormData({
      ...formData,
      thumbnail: null,
    });
    setThumbnailPreview(null);

    // Reset the file input value to null
    const fileInput = document.getElementById("thumbnail");
    if (fileInput) {
      fileInput.value = null;
    }
  };

  const handleAddFasilitas = () => {
    if (
      formData.fasilitas &&
      !formData.fasilitasPreview.includes(formData.fasilitas)
    ) {
      setFormData({
        ...formData,
        fasilitasPreview: [...formData.fasilitasPreview, formData.fasilitas],
        fasilitas: "", // Reset the input value
      });
    }
  };

  const handleRemoveFasilitas = (index : any) => {
    const newFasilitasPreview = formData.fasilitasPreview.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, fasilitasPreview: newFasilitasPreview });
  };

  const handleAddPeraturan = () => {
    if (
      formData.peraturan &&
      !formData.peraturanPreview.includes(formData.peraturan)
    ) {
      setFormData({
        ...formData,
        peraturanPreview: [...formData.peraturanPreview, formData.peraturan],
        peraturan: "", // Reset the input value
      });
    }
  };

  const handleRemovePeraturan = (index : any) => {
    const newPeraturanPreview = formData.peraturanPreview.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, peraturanPreview: newPeraturanPreview });
  };

  const handleSubmit = () => {
    console.log(formData);
  };


  return (
    <>
      <h2 className="text-2xl font-bold text-black text-center mt-10">
        {pathname === "/tambah-properti" ? "Form Tambah Properti" : "Detail Properti"}
      </h2>

      <form onSubmit={handleSubmit} className="relative pb-20">
        <div className="max-w-4xl mx-auto mt-1 grid grid-cols-2 gap-10 overflow-auto h-screen">
          <div className="col-span-1 mt-12">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="namaProperti"
              >
                Nama Properti
              </label>
              <input
                type="text"
                name="namaProperti"
                id="namaProperti"
                value={formData.namaProperti}
                onChange={handleChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="alamat"
              >
                Alamat
              </label>
              <input
                type="text"
                name="alamat"
                id="alamat"
                value={formData.alamat}
                onChange={handleChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="thumbnail"
              >
                Gambar Cover
              </label>
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                onChange={handleThumbnailChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              {thumbnailPreview && (
                <div className="flex items-center space-x-2 mt-2">
                  <Image
                    src={thumbnailPreview}
                    className="h-10 w-10 object-cover rounded-md mr-2"
                    width={40}
                    height={40}
                    alt="Thumbnail Preview"
                  />
                  <div className="flex-grow flex justify-between items-center w-40">
                    <p className="text-sm text-gray-700">
                      {formData.thumbnail.name}
                    </p>
                    <button
                      type="button"
                      onClick={handleRemoveThumbnail}
                      className="text-red-500 hover:text-red-700 mr-20"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="images"
              >
                Gambar Fasilitas
              </label>
              <input
                type="file"
                name="images"
                id="images"
                multiple
                onChange={handleImageChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
              <div className="mt-4 space-y-2">
                {imagePreviews.map((src, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Image
                      src={src}
                      alt={`Preview ${index}`}
                      className="h-10 w-10 object-cover rounded-md mr-2"
                      width={40}
                      height={40}
                    />
                    <div className="flex-grow flex justify-between items-center w-40">
                      <p className="text-sm text-gray-700">
                        {formData.images[index].name}
                      </p>
                      <button
                        type="button"
                        onClick={() => handleRemoveImages(index)}
                        className="text-red-500 hover:text-red-700 mr-20"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="deskripsi"
              >
                Deskripsi
              </label>
              <textarea
                name="deskripsi"
                id="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
          </div>

          <div className="col-span-1 mt-12">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="harga"
              >
                Harga
              </label>
              <input
                type="number"
                name="harga"
                id="harga"
                value={formData.harga}
                onChange={handleChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="kategori"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Kategori
              </label>
              <select
                name="kategori"
                id="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="" disabled>
                  Pilih Kategori
                </option>
                <option value="Kost">Kost</option>
                <option value="Kontrakan">Kontrakan</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                Type
              </label>
              <select
                name="type"
                id="type"
                value={formData.type}
                onChange={handleChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="" disabled>
                  Pilih Type
                </option>
                <option value="Putra">Putra</option>
                <option value="Putri">Putri</option>
                <option value="Campur">Campur</option>
              </select>
            </div>

            <label
              htmlFor="fasilitas"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Fasilitas
            </label>

            <div className="mb-4 flex items-center">
              <select
                name="fasilitas"
                id="fasilitas"
                value={formData.fasilitas}
                onChange={handleChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Pilih Fasilitas</option>
                <option value="Wifi">Wifi</option>
                <option value="AC">AC</option>
                <option value="Lemari">Lemari</option>
              </select>
              <button
                type="button"
                onClick={handleAddFasilitas}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              >
                Tambah
              </button>
            </div>
            {formData.fasilitasPreview.length > 0 && (
              <div className="mb-4">
                {formData.fasilitasPreview.map((fasilitas, index) => (
                  <div className="flex justify-between items-center w-full mb-2">
                    <p className="text-base text-gray-700 ml-2 font-semibold">
                      {fasilitas}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleRemoveFasilitas(index)}
                      className="text-red-500 hover:text-red-700 mr-20"
                    >
                      <FaMinusCircle />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <label
              htmlFor="peraturan"
              className="block text-sm font-bold text-gray-700 mb-2"
            >
              Peraturan
            </label>

            <div className="mb-4 flex items-center">
              <input
                type="text"
                name="peraturan"
                id="peraturan"
                value={formData.peraturan}
                onChange={handleChange}
                className="bg-slate-100 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="button"
                onClick={handleAddPeraturan}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
              >
                Tambah
              </button>
            </div>
            {formData.peraturanPreview.length > 0 && (
              <div className="mb-4">
                {formData.peraturanPreview.map((peraturan, index) => (
                  <div className="flex justify-between items-center w-full mb-2">
                    <p className="text-base text-gray-700 ml-2 font-semibold">
                      {peraturan}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleRemovePeraturan(index)}
                      className="text-red-500 hover:text-red-700 mr-20"
                    >
                      <FaMinusCircle />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="fixed bottom-0 right-0 flex items-center gap-2 p-4 bg-white">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Tambah Properti
            </button>
              
            <Link className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" href="/properti-saya">
            
              Kembali
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
