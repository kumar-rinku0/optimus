import React from "react";

export const SmallBanner = () => {
  return (
    <div
      className="grid gap-4 p-4 lg:px-20 lg:py-12 lg:grid-cols-2 lg:gap-12"
      id="small-banner"
    >
      <div className="bg-cover h-[250px] lg:h-[400px] flex flex-col gap-1 text-white relative bg-[url('https://images.unsplash.com/photo-1613461920867-9ea115fee900?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="bg-[#00000062] absolute inset-0 lg:p-12 lg:py-28 p-4 py-12 flex flex-col justify-center">
          <h3 className="font-light capitalize">crazy deals</h3>
          <h2 className="text-4xl font-bold">10% Off Your First Order</h2>
          <p className="">The best classic T_shirts</p>
          <button className="px-4 py-2 mt-6 text-white capitalize transition-all duration-300 bg-transparent border w-[120px] hover:text-black hover:bg-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-cover h-[250px] lg:h-[400px] flex flex-col gap-1 relative bg-[url('https://images.unsplash.com/photo-1513373319109-eb154073eb0b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className="bg-[#6f6f6f3a] absolute inset-0 lg:p-12 lg:py-28 p-4 py-12 flex flex-col justify-center">
          <h3 className="font-light capitalize">crazy deals</h3>
          <h2 className="text-4xl font-bold">Summer collection</h2>
          <p className="">The best classic T_shirts</p>
          <button className="px-4 py-2 mt-6 text-black capitalize transition-all duration-300 bg-transparent border w-[120px] border-black hover:text-white hover:bg-black">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export const LargeBanner = () => {
  return (
    <div
      className="px-4 py-8 mx-4 bg-cover shadow lg:px-0 lg:mx-20 bg-[#e4e6f4] lg:py-8"
      id="banner"
    >
      <div className="flex flex-col items-center gap-2 text-center lg:gap-3 lg:py-12">
        <h3 className="font-semibold capitalize text-slate-900">
          Repair services
        </h3>
        <h1 className="text-3xl font-bold text-gray-900 capitalize lg:text-5xl">
          Up to <span className="text-orange-700">70% Off</span> -All t-shirts
          and Accessories
        </h1>
        <p className="text-gray-600">
          Limited Time Offer: Free Shipping on Orders Over $50
        </p>
        <button className="p-3 px-4 font-semibold text-white bg-orange-700 rounded hover:bg-opacity-80">
          Explore more
        </button>
      </div>
    </div>
  );
};

export const Banner = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`flex bg-[url("https://images.unsplash.com/photo-1442029739115-ce733f0de45e?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] relative items-center justify-center gap-3 p-4 lg:h-[380px] h-[300px] lg:items-center`}
    >
      <div className="flex flex-col absolute inset-0 lg:p-16 text-center p-12 justify-center items-center text-white bg-[#00000062]">
        <h2 className="text-3xl font-bold capitalize lg:text-5xl">{title}</h2>
        <div className="text-gray-400">{description}</div>
      </div>
    </div>
  );
};

export default Banner;
