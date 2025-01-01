import Link from "next/link";
import Image from "next/image";
import buttonBgPic from "../../public/assets/button.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#e4e6f4] flex justify-center items-center py-20"
    >
      <div className="container flex justify-center items-center flex-col gap-4 p-4">
        <h4 className="font-semibold">Tread-in-Offer</h4>
        <h2 className="text-4xl lg:text-6xl font-bold capitalize">
          Super Value Deals
        </h2>
        <h1 className="text-4xl lg:text-6xl font-bold capitalize text-teal-700">
          On All Products!
        </h1>
        <p className="text-gray-500 font-light">
          Save more with coupons and up to 70% off!
        </p>
        <Link href="#shop">
          <div className="w-60 h-20 relative flex justify-center items-center">
            <Image
              src={buttonBgPic}
              alt="button img"
              className="object-contain w-auto h-auto"
            />
            <span className="font-semibold absolute">shop</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
