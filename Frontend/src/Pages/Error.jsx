import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="text-center max-w-lg w-full">

                {/* 404 Number */}
                <div className="relative mb-6">
                    <h1 className="text-[120px] md:text-[160px] font-black text-gray-100 dark:text-gray-800 leading-none select-none">
                        404
                    </h1>
                    {/* Floating emoji over the number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl md:text-6xl">😕</span>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-px w-16 bg-orange-400"></div>
                    <span className="text-orange-500 font-bold text-sm uppercase tracking-widest">
                        Page Not Found
                    </span>
                    <div className="h-px w-16 bg-orange-400"></div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Oops! You're lost.
                </h2>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <NavLink
                        to="/"
                        className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 text-sm"
                    >
                        ← Return Home
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-orange-400 hover:text-orange-500 px-8 py-3 rounded-full font-semibold transition-colors duration-200 text-sm"
                    >
                        Contact Support
                    </NavLink>
                </div>

                {/* Bottom hint */}
                <p className="text-xs text-gray-400 mt-8">
                    Error Code: <span className="font-semibold text-gray-500 dark:text-gray-400">404</span> — Page does not exist
                </p>
            </div>
        </div>
    );
};

export default Error;