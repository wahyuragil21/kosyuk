"use client";

import BannerAds from "@/components/bannerAds";
import WelcomePage from "@/components/welcomePage";


export default function DashboardPemilik() {
  return (
    <div className="flex flex-row">
      <div className="w-11/12 m-auto">
      {/* <BannerAds/> */}
      <WelcomePage/>
      </div>
    </div>

  );
}
