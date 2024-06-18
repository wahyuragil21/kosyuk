"use client";
import Image from "next/image";
import kosyuk from "../assets/kosyuk.png";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import path from "node:path/win32";

export default function NavbarProduct({
  isLogin,
  placeholder,
}: {
  isLogin?: string;
  placeholder?: string;
}) {
  const pathname = usePathname();

  const [dropdownOpenCariApa, setDropdownOpenCariApa] = useState(false);
  const [dropdownOpenMasuk, setDropdownOpenMasuk] = useState(false);

  const dropdownRefCariApa = useRef(null);
  const dropdownRefMasuk = useRef(null);

  const toggleDropdownCariApa = () => {
    setDropdownOpenCariApa(!dropdownOpenCariApa);
  };

  const toggleDropdownMasuk = () => {
    setDropdownOpenMasuk(!dropdownOpenMasuk);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRefCariApa.current &&
      !dropdownRefCariApa.current.contains(event.target)
    ) {
      setDropdownOpenCariApa(false);
    }
    if (
      dropdownRefMasuk.current &&
      !dropdownRefMasuk.current.contains(event.target)
    ) {
      setDropdownOpenMasuk(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-white sticky top-0 z-50 flex justify-between px-5 border-b border-gray-200">
      <div className="logo flex items-center">
        <Image src={kosyuk} alt="Kosyuk logo" width={35} height={35} />
        <Link href="/">
          <h1 className="text-2xl text-black font-sans font-bold ml-2">
            KOSYUK
          </h1>
        </Link>
      </div>
      <div className="nav-right flex items-center">
        {pathname !== "/login/pencari" &&
          pathname !== "/login/pemilik" &&
          pathname !== "/register/pencari" &&
          pathname !== "/register/pemilik" && (
            <form className="mr-5">
              <input
                className="border border-black bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:border-none"
                type="search"
                name="search"
                placeholder="Masukkan lokasi..."
              />
              <button type="button"></button>
            </form>
          )}
        <ul className="flex flex-wrap gap-5 text-black font-sans font-semibold">
          <li className="relative" ref={dropdownRefCariApa}>
            <a
              className="cursor-pointer hover:text-orange-500"
              onClick={toggleDropdownCariApa}
            >
              Cari Apa?
            </a>
            {dropdownOpenCariApa && (
              <ul className="dropdown-menu absolute top-10 bg-white shadow-md py-2 w-56 rounded-md">
                <li className="hover:bg-gray-100">
                  <a href="/kost" className="block px-4 py-2">
                    Kost
                  </a>
                </li>
                <li className="hover:bg-gray-100">
                  <a href="/kontrakan" className="block px-4 py-2">
                    Kontrakan
                  </a>
                </li>
              </ul>
            )}
          </li>
          {isLogin && (
            <li className="hover:text-orange-500">
              <Link href="/dashboard">Riwayat Booking</Link>
            </li>
          )}
          <li className="hover:text-orange-500">
            <a>Pusat Bantuan</a>
          </li>
          <li className="hover:text-orange-500">
            <a>Syarat dan Ketentuan</a>
          </li>
          {isLogin ? (
            <li className="hover:text-orange-500">
              <Link href="/login">Logout</Link>
            </li>
          ) : (
            <li className="relative" ref={dropdownRefMasuk}>
              <a
                className="cursor-pointer hover:text-orange-500"
                onClick={toggleDropdownMasuk}
              >
                Masuk
              </a>
              {dropdownOpenMasuk && (
                <ul className="dropdown-menu absolute top-10 right-0 bg-white shadow-md py-2 w-56 rounded-md">
                  <li className="hover:bg-gray-100">
                    <a href="/login/pencari" className="block px-4 py-2">
                      Pencari
                    </a>
                  </li>
                  <li className="hover:bg-gray-100">
                    <a href="/login/pemilik" className="block px-4 py-2">
                      Pemilik
                    </a>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
