import FeaturesCard from "@/components/features-card";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import ScrollCard from "@/components/scroll-card";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesCard />
      <Products />
      <section id="shop">
        <ScrollCard />
      </section>
    </main>
  );
}
