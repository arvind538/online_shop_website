import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const TestimonialData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Verified Buyer",
    product: "Men's Denim Jacket",
    text: "Amazing quality! The jacket fits perfectly and looks exactly like the pictures. Delivery was super fast. Highly recommend Online Shop!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    badge: "🛍️ Repeat Customer",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Verified Buyer",
    product: "Girls Party Dress",
    text: "Loved the dress! The fabric is so soft and comfortable. Got so many compliments at the party. Will definitely order again!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    badge: "⭐ Top Reviewer",
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Verified Buyer",
    product: "Smart Watch",
    text: "Great product at an unbeatable price. The smartwatch has all the features I needed. Customer support was also very helpful.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 4,
    badge: "✅ Verified Purchase",
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Verified Buyer",
    product: "Girls Kurti",
    text: "The kurti looks even better in person! Colors are vibrant and stitching is excellent. Fast delivery and great packaging too.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    badge: "💎 Premium Member",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    role: "Verified Buyer",
    product: "Gaming Mouse",
    text: "Perfect gaming mouse! Very responsive and comfortable for long sessions. Great value for money. Online Shop never disappoints!",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
    badge: "🎮 Tech Enthusiast",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="py-14 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            Customer Reviews
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">
            What Our Customers Say
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Real reviews from real customers — see why thousands love shopping with us.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-base" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              4.9 out of 5
            </span>
            <span className="text-xs text-gray-400">(2,400+ reviews)</span>
          </div>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-3 py-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-4 relative hover:shadow-md transition-shadow duration-300 h-full">

                {/* Quote mark */}
                <span className="absolute top-4 right-5 text-6xl font-serif text-orange-200 dark:text-orange-900/50 leading-none select-none">
                  "
                </span>

                {/* Top — Avatar + Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white text-sm">
                      {data.name}
                    </h3>
                    <p className="text-xs text-gray-400">{data.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < data.rating ? "text-yellow-400" : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  "{data.text}"
                </p>

                {/* Product tag */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-xs text-orange-500 font-semibold flex items-center gap-1">
                    🛒 {data.product}
                  </span>
                  <span className="text-xs bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full font-medium">
                    {data.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Join <span className="font-semibold text-orange-500">10,000+</span> happy customers shopping with us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;