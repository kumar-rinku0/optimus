import Image, { StaticImageData } from "next/image";
import React from "react";
import Img1 from "../../../public/assets/blog/img1.avif";
import Img2 from "../../../public/assets/blog/img2.avif";
import Img3 from "../../../public/assets/blog/img3.avif";
import Banner from "@/components/banner";

const BlogItem = ({
  image,
  content,
  date,
}: {
  image: StaticImageData;
  content: string;
  date?: string;
}) => {
  return (
    <div className="grid grid-cols-3">
      <div className="relative flex items-center lg:col-span-1">
        <Image
          src={image}
          alt="img1"
          className="lg:h-[300px] w-full h-[220px] object-cover ov"
        />
        <div className="absolute z-0 top-0 text-4xl font-bold text-gray-300 lg:ml-2 lg:text-7xl">
          {date}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center col-span-2 p-12 px-6 py-10 lg:gap-3 lg:py-24">
        <h3 className="text-xl font-semibold lg:text-3xl"></h3>
        <p>{content}</p>
        <button
          type="button"
          className="flex items-center gap-2 font-semibold text-gray-800 uppercase hover:text-gray-500"
        >
          <span> continue reading</span>
          <div className="hidden lg:flex w-[60px] h-0.5 rounded bg-gray-800"></div>
        </button>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="min-h-[100vh]">
      <Banner
        title="#stayhome"
        description="Save more with coupons and up to 70% off!!"
      />
      <div className="lg:pt-12 p-8 grid lg:gap-16 gap-8 lg:px-20 lg:h-[150vh]">
        <BlogItem
          image={Img1}
          content="More than ever, consumers are prioritizing sustainability in their
        fashion choices."
          date="11/03"
        />
        <BlogItem
          image={Img2}
          content="More than ever, consumers are prioritizing sustainability in their
        fashion choices."
          date="01/23"
        />
        <BlogItem
          image={Img3}
          content="More than ever, consumers are prioritizing sustainability in their
          fashion choices."
          date="17/09"
        />
      </div>
    </div>
  );
};

export default Blog;
