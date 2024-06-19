export default function BannerAds() {
  return (
    <div className="bg-slate-100 h-48 flex justify-center items-center rounded-lg shadow-md mt-10">
      <div className="flex-1 p-4">
        <h2 className="text-2xl font-bold text-black">
          Daftarkan Kos Anda di Kosyuk
        </h2>
        <p className="text-lg text-black">
          Berbagai fitur dan layanan untuk meningkatkan bisnis kos Anda
        </p>
      </div>
      <div className="flex justify-center p-4">
        <button className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </div>
  );
}
