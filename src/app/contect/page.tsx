import Banner from "@/components/banner";
import ContectBanner from "@/components/contect-banner";
import React from "react";

const Contect = () => {
  return (
    <div className="min-h-[100vh]">
      <div id="banner">
        <Banner
          title="#stayhome"
          description="Save more with coupons and up to 70% off!!"
        />
      </div>
      <div id="contect">
        <ContectBanner />
      </div>
    </div>
  );
};

export default Contect;
