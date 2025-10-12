import { FeaturedCards, NewArivalCards } from "@/components/products";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* New Arrivals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4">
          🆕 New Arrivals
        </h2>
        <NewArivalCards />
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-yellow-500 pl-4">
          ⭐ Featured Products
        </h2>
        <FeaturedCards />
      </section>
    </div>
  );
};

export default Shop;
