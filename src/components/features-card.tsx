import Image from "next/image";

const Card = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="min-w-36 flex flex-col justify-center items-center gap-2 p-4 border border-gray-300 rounded-md">
      <div className="relative w-20 h-16">
        <Image
          src={image}
          alt={title}
          fill={true}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="capitalize">{title}</div>
    </div>
  );
};

const FeaturesCard = () => {
  return (
    <div className="bg-[#f3fcff] flex flex-wrap justify-around items-center gap-8 px-4 py-8">
      <Card title="free shoping" image="/assets/features/f1.png" />
      <Card title="online order" image="/assets/features/f2.png" />
      <Card title="save money" image="/assets/features/f3.png" />
      <Card title="promotions" image="/assets/features/f4.png" />
      <Card title="happy sell" image="/assets/features/f5.png" />
      <Card title="24/7 support" image="/assets/features/f6.png" />
    </div>
  );
};

export default FeaturesCard;
