import Banner, { SmallBanner } from "@/components/banner";
import Contect from "@/components/contect";
import FeaturesCard from "@/components/features-card";
import Hero from "@/components/hero";
import { FeaturedProduct, NewArivalProducts } from "@/components/products";
import ScrollCard from "@/components/scroll-card";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesCard />
      <FeaturedProduct />
      <section id="about">
        <Banner />
      </section>
      <NewArivalProducts />
      <SmallBanner />
      <section id="blog">
        <ScrollCard />
      </section>
      <section id="contect">
        <Contect />
      </section>
    </main>
  );
}
