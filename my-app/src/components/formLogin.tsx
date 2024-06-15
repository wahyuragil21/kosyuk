import Link from "next/link";
import login from "../assets/login.png";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function FormLogin() {
  const pathname = usePathname();

  return (
    <div className="bg-gray-100 text-gray-900 flex justify-center">
      <div className="bg-white shadow flex justify-center flex-1">
        <div className="lg:w-1/2 mt-20 xl:w-5/12 sm:p-12">
            <h2 className="text-2xl font-bold">{pathname === "/login/pencari" ? "Login Sebagai Pencari Kost : " : "Login Sebagai Pemilik Kost : "} </h2>
          <div className="flex flex-col items-center">
            <form action="{handleRegister}" className="w-full flex-1 mt-8">
              <div className="flex flex-col mb-4">
                <label className="text-sm text-gray-600" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full mt-2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-sm text-gray-600" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full mt-2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button
                className="text-center mt-10 mb-5 w-full max-w-full font-bold shadow-sm rounded-lg py-3 bg-black text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                type="submit"
              >
                Masuk
              </button>
            </form>
            <p className="text-sm text-gray-600 text-center">
              Belum punya akun?{" "}
              <Link href={pathname === "/login/pencari" ? "/register/pencari" : "/register/pemilik"} className="hover:text-blue-600 font-bold">
                Daftar
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden mt-5 mb-10 lg:flex lg:w-1/2 items-center justify-center">
          <Image
            src={login}
            alt="Registration Image"
            className="object-cover rounded-lg h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}
