import React, { useState } from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim() || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div
      className="mb-20 text-white"
      style={BannerImg}
    >
      {/* Backdrop blur overlay */}
      <div className="w-full h-full backdrop-blur-sm bg-black/30 py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">

          {/* Badge */}
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Newsletter
          </span>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-snug">
            Get Notified About New Products
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Subscribe to our newsletter and be the first to know about
            new arrivals, exclusive deals, and special offers.
          </p>

          {/* Input + Button */}
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 bg-green-500/20 border border-green-400 text-green-300 px-6 py-3 rounded-full max-w-md mx-auto">
              <span className="text-lg">✅</span>
              <p className="font-semibold text-sm">Successfully subscribed!</p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="Enter your email address..."
                className="w-full flex-1 px-5 py-3 rounded-full text-gray-800 dark:text-white dark:bg-gray-700 outline-none focus:ring-2 focus:ring-orange-400 text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          )}

          {/* Privacy note */}
          <p className="text-white/50 text-xs mt-4">
            No spam ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;