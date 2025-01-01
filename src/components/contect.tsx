import React from "react";

const Contect = () => {
  return (
    <div className="relative mt-8 h-[240px] lg:h-[250px] lg:mt-12 text-white bg-[url('https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] grid lg:grid-cols-2 lg:gap-12">
      <div className="absolute bg-[#000000a9] inset-0 flex flex-col lg:grid px-2 lg:px-20 lg:p-12 gap-3 items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold capitalize">
            Sign up for networks
          </h2>
          <p className="font-light text-gray-400 lg:text-lg">
            Get Email updates about our latest shop and special offers
          </p>
        </div>
        <form className="flex">
          <input
            type="text"
            placeholder="Your Email Address"
            className="px-4 py-3 w-full lg:w-[400px] bg-white border-none rounded rounded-r-none placeholder:text-gray-600"
          />
          <button
            className="capitalize px-4 py-3 w-[50%] lg:w-[30%] font-semibold text-white rounded rounded-l-none hover:bg-opacity-90 lg:px-6 bg-teal-700"
            type="button"
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
