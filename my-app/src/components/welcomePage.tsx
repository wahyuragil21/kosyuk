import Image from "next/image";
import Logo from "../assets/logo.png";
import BackGround from "../assets/bg.png"

export default function WelcomePage() {
  return (
    <section 
      className="bg-cover bg-center h-screen w-full flex items-center justify-center font-sans -mt-20" 
    >
      <div className="text-center bg-white bg-opacity-80 p-10 rounded-lg" style={{ 
        backgroundImage: `url(${BackGround.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <h1 className="text-4xl font-bold mb-4 text-black">
          SERLOK AJA : Teman setia pencarianmu!
        </h1>
        <p className="text-xl text-black mb-3">
          Ayo perluas jaringan bisnis anda dengan <span className="font-bold text-blue-600">SERLOK AJA</span>
        </p>
        <p className="text-sm text-black">Dengan bergabung di SERLOK AJA, properti anda akan lebih mudah untuk dijangkau oleh calon pengguna kapan saja dan dimana saja.</p> 
        <p className="text-sm text-black">SERLOK AJA berkomitmen untuk memberikan pelayanan yang terbaik untuk pencari dan pemilik kost</p>
        <p className="mt-3 text-black">
          Ayo{" "}
          <a
            href="/tambah-properti"
            className="font-bold bg-blue-600 text-white border border-blue-600 p-1 rounded inline-block"
          >
            Daftarkan
          </a>{" "}
          kost anda sekarang
        </p>
        <div className="flex items-center justify-center mt-5">
          <Image src={Logo} alt="Kosyuk logo" width={90} height={90} />
        </div>
        <h1 className="text-2xl text-black font-sans font-bold">SERLOK AJA</h1>
      </div>
    </section>
  );
}
