import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

const FeaturedProduct = ({
  title,
  image,
  company,
  rating,
  price,
}: {
  title: string;
  image: string;
  company?: string;
  rating?: number;
  price?: number;
}) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <div className="relative w-64 h-64 ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="text-gray-500 h-6">{company}</div>
      <div>{title}</div>

      {rating && (
        <div className="text-xl">
          {Array.from({ length: rating }, (_, index) => (
            <span key={index}>⭐</span>
          ))}
        </div>
      )}
      {price && <div>$ {price}</div>}
      <div className="justify-self-end">
        <button
          type="button"
          className="h-8 w-8 bg-slate-300 rounded-full flex justify-center items-center"
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <div className="bg-[#f3fcff] flex flex-wrap justify-center items-center gap-8 px-4 py-8">
      <FeaturedProduct
        title="Cartoon astronout T-shirts"
        company="pubg corp."
        rating={2}
        image="https://images.unsplash.com/photo-1620799139652-715e4d5b232d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <FeaturedProduct
        title="Cartoon astronout T-shirts"
        rating={3}
        image="https://images.unsplash.com/photo-1620799139652-715e4d5b232d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <FeaturedProduct
        title="Cartoon T-shirts"
        company="loyout corp."
        rating={1}
        image="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

const Products = () => {
  return (
    <div>
      <FeaturedProducts />
    </div>
  );
};

export default Products;
