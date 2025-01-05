import { SmallBanner, LargeBanner } from "@/components/banner";
import ContectBanner from "@/components/contect-banner";
import FeaturesCard from "@/components/features-card";
import Hero from "@/components/hero";
import { FeaturedProduct, NewArivalProducts } from "@/components/products";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesCard />
      <FeaturedProduct />
      <section id="about">
        <LargeBanner />
      </section>
      <NewArivalProducts />
      <SmallBanner />
      <section id="contect">
        <ContectBanner />
      </section>
    </main>
  );
}
