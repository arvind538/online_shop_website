import React, { useState } from "react";
import { useAuth } from "../Store/auth";
import { FaStar, FaShoppingCart, FaCheck } from "react-icons/fa";

const clothesData = [
  { id: 101, title: "Men T-Shirt", price: 799, originalPrice: 1299, rating: 4, reviews: 184, badge: "Popular", badgeColor: "bg-green-500", category: "men", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", bgColor: "from-green-50 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40" },
  { id: 102, title: "Casual Shirt", price: 1199, originalPrice: 1999, rating: 4, reviews: 132, badge: "Trending", badgeColor: "bg-blue-500", category: "men", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500", bgColor: "from-blue-50 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40" },
  { id: 103, title: "Jeans", price: 1799, originalPrice: 2799, rating: 5, reviews: 276, badge: "Best Seller", badgeColor: "bg-orange-500", category: "men", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500", bgColor: "from-orange-50 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40" },
  { id: 104, title: "Denim Jacket", price: 2499, originalPrice: 3999, rating: 5, reviews: 98, badge: "Premium", badgeColor: "bg-indigo-500", category: "men", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500", bgColor: "from-indigo-50 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40" },
  { id: 105, title: "Hoodie", price: 1599, originalPrice: 2499, rating: 4, reviews: 215, badge: "New", badgeColor: "bg-teal-500", category: "men", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", bgColor: "from-teal-50 to-cyan-100 dark:from-teal-900/40 dark:to-cyan-900/40" },
  { id: 106, title: "Blazer", price: 2999, originalPrice: 4499, rating: 5, reviews: 76, badge: "Top Rated", badgeColor: "bg-purple-500", category: "men", image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=500", bgColor: "from-purple-50 to-violet-100 dark:from-purple-900/40 dark:to-violet-900/40" },
  { id: 107, title: "Track Pants", price: 999, originalPrice: 1599, rating: 4, reviews: 154, badge: "Hot Deal", badgeColor: "bg-red-500", category: "men", image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=500", bgColor: "from-red-50 to-rose-100 dark:from-red-900/40 dark:to-rose-900/40" },
  { id: 108, title: "Oversized Graphic Tee", price: 1299, originalPrice: 1999, rating: 4, reviews: 121, badge: "Trending", badgeColor: "bg-blue-500", category: "men", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500", bgColor: "from-blue-50 to-sky-100 dark:from-blue-900/40 dark:to-sky-900/40" },
  { id: 109, title: "Casual T-Shirt", price: 999, originalPrice: 1599, rating: 4, reviews: 143, badge: "Popular", badgeColor: "bg-green-500", category: "men", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", bgColor: "from-green-50 to-lime-100 dark:from-green-900/40 dark:to-lime-900/40" },
  { id: 110, title: "Cargo Utility Pants", price: 1799, originalPrice: 2799, rating: 4, reviews: 167, badge: "Sale", badgeColor: "bg-yellow-500", category: "men", image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=500", bgColor: "from-yellow-50 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40" },
  { id: 111, title: "Printed Co-Ord Set", price: 2499, originalPrice: 3799, rating: 5, reviews: 89, badge: "New", badgeColor: "bg-teal-500", category: "boys", image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=500", bgColor: "from-teal-50 to-emerald-100 dark:from-teal-900/40 dark:to-emerald-900/40" },
  { id: 112, title: "Denim Patchwork Jacket", price: 2999, originalPrice: 4599, rating: 5, reviews: 64, badge: "Premium", badgeColor: "bg-indigo-500", category: "men", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500", bgColor: "from-indigo-50 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40" },
  { id: 113, title: "Neon Streetwear Jacket", price: 2799, originalPrice: 4199, rating: 4, reviews: 112, badge: "Hot Deal", badgeColor: "bg-red-500", category: "boys", image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500", bgColor: "from-red-50 to-pink-100 dark:from-red-900/40 dark:to-pink-900/40" },
  { id: 114, title: "Asymmetrical Kurta", price: 1599, originalPrice: 2399, rating: 4, reviews: 95, badge: "Trending", badgeColor: "bg-blue-500", category: "men", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500", bgColor: "from-blue-50 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40" },
  { id: 115, title: "Reflective Sports Tracksuit", price: 2199, originalPrice: 3299, rating: 5, reviews: 138, badge: "Best Seller", badgeColor: "bg-orange-500", category: "boys", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", bgColor: "from-orange-50 to-amber-100 dark:from-orange-900/40 dark:to-amber-900/40" },
  { id: 116, title: "Printed Beach Shirt", price: 1199, originalPrice: 1899, rating: 4, reviews: 107, badge: "Popular", badgeColor: "bg-green-500", category: "men", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500", bgColor: "from-green-50 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40" },
];

const Cloths = () => {
  const { cart, addToCart, decreaseQty } = useAuth();
  const [addedMap, setAddedMap] = useState({});

  const getQty = (id) => cart.find((item) => item.id === id)?.quantity || 0;

  const discount = (original, price) =>
    Math.round(((original - price) / original) * 100);

  const handleAdd = (item) => {
    addToCart(item);
    setAddedMap((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <div className="py-14 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Fashion
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Clothing Collection
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Trendy outfits and everyday essentials — explore styles at the best prices!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {clothesData.map((item) => {
            const qty = getQty(item.id);
            const justAdded = addedMap[item.id];

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className={`relative overflow-hidden h-48 sm:h-52 bg-gradient-to-br ${item.bgColor}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  <span className={`absolute top-2 left-2 ${item.badgeColor} text-white text-xs font-bold px-2.5 py-0.5 rounded-full shadow`}>
                    {item.badge}
                  </span>

                  {/* Discount */}
                  <span className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    -{discount(item.originalPrice, item.price)}%
                  </span>

                  {/* Quick Add hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-orange-500/90 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center">
                    <button
                      onClick={() => handleAdd(item)}
                      className="flex items-center gap-2 text-white text-xs font-bold"
                    >
                      <FaShoppingCart />
                      Quick Add to Cart
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-3 sm:p-4 flex flex-col flex-1">

                  {/* Category */}
                  {item.category && (
                    <span className="text-xs text-indigo-500 font-semibold mb-1 capitalize">
                      {item.category}
                    </span>
                  )}

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-xs ${i < item.rating ? "text-yellow-400" : "text-gray-200"}`}
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">({item.reviews})</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-2 truncate">
                    {item.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3 mt-auto">
                    <span className="text-orange-500 font-bold text-sm md:text-base">
                      ₹{item.price}
                    </span>
                    <span className="text-gray-400 text-xs line-through">
                      ₹{item.originalPrice}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    {qty > 0 ? (
                      // Quantity control shown when item is already in cart
                      <div className="flex-1 flex items-center justify-between bg-orange-500 rounded-xl overflow-hidden">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="px-3 py-1.5 text-white font-bold text-sm hover:bg-orange-600 active:bg-orange-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="text-white text-xs font-semibold min-w-[1.5rem] text-center">
                          {qty}
                        </span>
                        <button
                          onClick={() => handleAdd(item)}
                          className="px-3 py-1.5 text-white font-bold text-sm hover:bg-orange-600 active:bg-orange-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      // Add button shown when item is not in cart yet
                      <button
                        onClick={() => handleAdd(item)}
                        className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1 ${
                          justAdded
                            ? "bg-green-500 text-white"
                            : "bg-orange-500 hover:bg-orange-600 text-white"
                        }`}
                      >
                        {justAdded ? (
                          <><FaCheck className="text-xs" /> Added!</>
                        ) : (
                          <><FaShoppingCart className="text-xs" />Add</>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cloths;