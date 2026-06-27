import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaGithub, FaLinkedin, FaLocationArrow, FaMobileAlt, FaShoppingBag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/products" },
  { title: "Electronics", link: "/electronics" },
  { title: "Cloths", link: "/cloths" },
  { title: "For Mens", link: "/mens" },
  { title: "For Girls", link: "/girls" },
];

const CustomerService = [
  { title: "Service", link: "/service" },
  { title: "Contact Us", link: "/contact" },
  { title: "Login", link: "/login" },
  { title: "Register", link: "/register" },
  { title: "Cart", link: "/cart" },
];

const Footer = () => {
  return (
    <>
    <footer style={BannerImg} className="text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

        {/* MAIN GRID */}
        {/* Mobile: 1 col, center-aligned | Tablet: 2 col | Desktop: 4 col, left-aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center sm:text-left">

          {/* 1 — Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="logo" className="w-10" />
              <h1 className="text-xl font-bold">
                Online <span className="text-orange-500">Shop</span>
              </h1>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-xs sm:max-w-none">
              Your one-stop destination for quality products at affordable prices.
              Browse, order, and get it delivered — all in a few clicks.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-xl justify-center sm:justify-start">
              <Link
                to="https://github.com/arvind538?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FaGithub />
              </Link>
              <Link
                to="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FaLinkedin />
              </Link>
              <Link
                to="https://maps.app.goo.gl/QRnBRTKxgk5jz5Xj6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FaLocationDot />
              </Link>
            </div>
          </div>

          {/* 2 — Important Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-base font-semibold mb-4 pb-1 border-b border-gray-500 inline-block">
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.link}
                    className="text-gray-300 text-sm hover:text-orange-400 transition-colors flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <span className="text-orange-500 text-xs">›</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3 — Customer Service */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-base font-semibold mb-4 pb-1 border-b border-gray-500 inline-block">
              Customer Service
            </h2>
            <ul className="space-y-2.5">
              {CustomerService.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.link}
                    className="text-gray-300 text-sm hover:text-orange-400 transition-colors flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <span className="text-orange-500 text-xs">›</span>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 — Contact */}
          <div className="flex flex-col items-center sm:items-start w-full">
            <h2 className="text-base font-semibold mb-4 pb-1 border-b border-gray-500 inline-block">
              Contact Us
            </h2>
            <div className="space-y-3 text-sm text-gray-300 w-full max-w-xs sm:max-w-none">
              <div className="flex items-start gap-3 justify-center sm:justify-start">
                <FaLocationArrow className="mt-0.5 shrink-0 text-orange-400 text-xs" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <FaMobileAlt className="shrink-0 text-orange-400 text-xs" />
                <a href="tel:+919973215343" className="hover:text-orange-400 transition-colors">
                  +91 9973215343
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        {/* Mobile: stacked, centered | Desktop: single row, justified */}
        <div className="border-t border-gray-500 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} Online Shop. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            <Link to="/#privacy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/#terms" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link>
            <span className="hidden sm:inline">•</span>
            <Link to="/#returns" className="hover:text-orange-400 transition-colors">Returns</Link>
          </div>
        </div>
      </div>

    </footer>
    </>
  );
};

export default Footer;