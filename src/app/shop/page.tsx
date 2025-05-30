import Banner from "@/components/banner";
import ScrollCard from "../../components/scroll-card";

const Shop = () => {
  return (
    <div className="min-h-[100vh]">
      <div>
        <ScrollCard />
        <Banner
          title="#stayhome"
          description="Save more with coupons and up to 70% off!!"
        />
      </div>
    </div>
  );
};

export default Shop;
