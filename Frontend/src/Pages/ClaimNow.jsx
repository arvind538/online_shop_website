import React from "react";
import { useNavigate } from "react-router-dom";

const offers = [
  {
    id: 1,
    title: "🔥 Best Offer of the Day",
    description: "Get amazing discounts on our premium clothing collection. Limited time offer — grab it before it ends!",
    originalPrice: 1999,
    offerPrice: 999,
    badge: "50% OFF",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800",
    link: "/cloths",
  },
  {
    id: 2,
    title: "⚡ Flash Sale — Electronics",
    description: "Top electronics at unbeatable prices. Hurry up, stock is limited!",
    originalPrice: 4999,
    offerPrice: 2999,
    badge: "40% OFF",
    badgeColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
    link: "/electronics",
  },
  {
    id: 3,
    title: "👗 Girls Special Sale",
    description: "Trendy girls fashion at amazing prices. New arrivals every week!",
    originalPrice: 2499,
    offerPrice: 1299,
    badge: "48% OFF",
    badgeColor: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
    link: "/girls",
  },
  {
    id: 4,
    title: "👔 Men's Exclusive Deal",
    description: "Premium men's collection at discounted rates. Style up for less!",
    originalPrice: 3499,
    offerPrice: 1799,
    badge: "48% OFF",
    badgeColor: "bg-green-500",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800",
    link: "/mens",
  },
];

const ClaimNow = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">

      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          🎉 Exclusive Offers
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Limited time deals — don't miss out!
        </p>
      </div>

      {/* Offers Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden grid grid-cols-2"
          >
            {/* LEFT — Image */}
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              {/* Badge */}
              <span className={`absolute top-3 left-3 ${offer.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                {offer.badge}
              </span>
            </div>

            {/* RIGHT — Content */}
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-base font-bold text-gray-800 dark:text-white mb-2 leading-snug">
                  {offer.title}
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              <div>
                {/* Price */}
                <div className="mb-4">
                  <p className="text-sm line-through text-gray-400">
                    ₹{offer.originalPrice}
                  </p>
                  <p className="text-xl font-bold text-orange-500">
                    ₹{offer.offerPrice}
                  </p>
                  <p className="text-xs text-green-600 font-medium mt-0.5">
                    You save ₹{offer.originalPrice - offer.offerPrice}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => navigate(offer.link)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                >
                  Claim Now →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
          Want to explore more?
        </p>
        <button
          onClick={() => navigate("/products")}
          className="bg-gray-800 dark:bg-white dark:text-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ClaimNow;