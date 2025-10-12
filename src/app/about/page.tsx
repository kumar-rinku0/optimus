import Banner from "@/components/banner";
import React from "react";

const About = () => {
  return (
    <div className="min-h-[100vh]">
      <div>
        <Banner
          title="#bigsale"
          description="Save more with coupons and up to 40% off with latest arrivals!!"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our store! We&#39;re passionate about bringing you the best
          deals on quality products from trusted brands — all from the comfort
          of your home. Whether you&#39;re shopping for the latest trends or
          everyday essentials, we&#39;ve got you covered.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to make online shopping simple, affordable, and
          enjoyable. With exclusive discounts, seasonal sales, and a wide
          variety of products, you can always find something you love — for
          less.
        </p>
        <p className="text-gray-700">
          Thank you for supporting us. Stay safe, stay home, and happy shopping!
        </p>
      </div>
    </div>
  );
};

export default About;
