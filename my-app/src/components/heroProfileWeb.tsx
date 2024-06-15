import Image from "next/image";
import Logo from "../assets/logo.png";
export default function HeroProfileWeb() {
  return (
    <section className="bg-cover bg-slate-100 bg-center h-96 w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-black">
          Kosyuk: Your Guide to Finding the Perfect Kos
        </h1>
        <p className="text-xl text-black mb-8">
          Discover thousands of kos options across Indonesia with Kosyuk.
        </p>
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="Kosyuk logo" width={90} height={90} />
        </div>
        <h1 className="text-2xl text-black font-sans font-bold">Kosyuk</h1>
      </div>
    </section>
  );
}
