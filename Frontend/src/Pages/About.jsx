import React from 'react';
import { useAuth } from "../Store/auth";

const features = [
  {
    emoji: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png",
    title: "Lightning-Fast Performance",
    desc: "Built with speed — minimal load times and optimized rendering for best user experience.",
  },
  {
    emoji: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png",
    title: "Beautifully Designed Components",
    desc: "Modern, pixel-perfect UI components ready for any project.",
  },
  {
    emoji: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png",
    title: "Plug-and-Play Integration",
    desc: "Simple setup with support for React, Next.js and Tailwind CSS.",
  },
];

const About = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

      {/* HERO SECTION */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 px-4 py-12 text-center">
        <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
          Welcome {user ? `back, ${user.username}` : "to Online Shop"}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-3">
          About Our App
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          A visual collection of our most recent works — each piece crafted with
          intention, emotion and style.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
          <div className="w-full md:w-1/2 shrink-0">
            <img
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
              alt="About"
              className="w-full max-w-sm mx-auto md:max-w-full rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Features */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Our Latest Features
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Ship Beautiful Frontends Without the Overhead — Customizable,
              Scalable and Developer-Friendly UI Components.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-10 h-10 p-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg shrink-0">
                    <img src={feature.emoji} alt={feature.title} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="bg-white dark:bg-gray-800 border-t dark:border-gray-700 py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Products" },
            { value: "10K+", label: "Happy Customers" },
            { value: "4.8★", label: "Average Rating" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="p-4">
              <p className="text-2xl md:text-3xl font-black text-orange-500 mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION SECTION */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Our Mission
        </h2>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
          We believe shopping should be simple, affordable, and enjoyable.
          Our mission is to bring you the best products from top brands at
          unbeatable prices — delivered right to your doorstep with care and speed.
        </p>
      </div>

    </div>
  );
};

export default About;