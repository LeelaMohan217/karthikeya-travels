import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden">
      <div className="max-w-5xl mx-auto z-10 px-6 py-12 text-gray-800 text-center">
        <p className="text-orange-600 uppercase tracking-wide text-sm font-semibold">
          Plan Your Destination
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-orange-900">
          Save big with Sri Karthikeya car rentals
        </h2>
        <p className="text-md md:text-lg text-orange-800 mb-6">
          Enjoy premium cars, 24/7 support, flexible plans, and seamless
          customer service. Our glass-clear pricing and luxury experience set us
          apart.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            to="/about"
            className="px-5 py-3 border border-orange-600 text-gray-800 rounded-md hover:bg-orange-200 transition-all duration-300 font-medium"
          >
            Learn More
          </Link>
          <Link
            to="/form"
            className="px-5 py-3 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 font-medium"
          >
            Book a ride
          </Link>
        </div>
      </div>

      <div className="w-96 h-96 bg-orange-300 opacity-30 blur-3xl rounded-full absolute -top-20 -left-20"></div>
      <div className="w-96 h-96 bg-orange-300 opacity-30 blur-3xl rounded-full absolute -bottom-20 -right-20"></div>
      <div className="w-56 h-56 bg-orange-300 opacity-30 blur-3xl rounded-full absolute bottom-40 left-100"></div>
    </section>
  );
};

export default Hero;
