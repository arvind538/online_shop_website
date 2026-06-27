import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ImageList = [
  {
    id: 1,
    img: Image1,
    badge: "Men's Fashion",
    title: "Upto 50% Off on Men's Wear",
    description:
      "Refresh your wardrobe with the latest trends in shirts, jackets, and footwear — premium quality at unbeatable prices.",
  },
  {
    id: 2,
    img: Image2,
    badge: "Women's Fashion",
    title: "30% Off on Women's Wear",
    description:
      "Discover stylish dresses, kurtis, and accessories handpicked for every occasion — shop the season's best collection.",
  },
  {
    id: 3,
    img: Image3,
    badge: "Mega Sale",
    title: "70% Off on All Products",
    description:
      "Our biggest sale is live! Grab electronics, clothing, and accessories before the deals run out.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-orange-400/20 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>

      <div className="container pb-10 sm:pb-0 max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">

                {/* text section */}
                <div className="flex flex-col justify-center gap-4 pt-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">

                  <span className="inline-block w-fit mx-auto sm:mx-0 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    {data.badge}
                  </span>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-800 dark:text-white">
                    {data.title}
                  </h1>

                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto sm:mx-0">
                    {data.description}
                  </p>

                  <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2">
                    <Link
                      to="/products"
                      className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 hover:scale-105 duration-200 text-white py-2.5 px-6 rounded-full text-sm font-semibold transition-all"
                    >
                      Shop Now
                      <FaArrowRight className="text-xs" />
                    </Link>

                    <button
                      onClick={handleOrderPopup}
                      className="bg-white dark:bg-gray-800 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-700 hover:scale-105 duration-200 py-2.5 px-6 rounded-full text-sm font-semibold transition-all"
                    >
                      Claim Offer
                    </button>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[260px] h-[260px] sm:h-[420px] sm:w-[420px] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;