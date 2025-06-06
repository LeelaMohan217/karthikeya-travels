import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-orange-900 mb-4">
            Ready to Travel in Comfort and Style?
          </h2>

          <p className="text-sm md:text-base text-orange-800 tracking-wide mb-3">
            Discover affordable, reliable, and safe travel with our premium car
            services.
          </p>

          <p className="text-sm md:text-base text-justify text-orange-800 tracking-wide mb-5">
            Whether you're heading out for a family vacation, a business trip,
            or a weekend escape, we’ve got the perfect ride for you. Our
            well-maintained fleet, professional drivers, and unbeatable prices
            ensure your journey is as smooth as your destination is exciting.
          </p>

          <div className="mt-4">
            <Link
              to="/carsPage"
              className="px-5 py-3 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 font-medium "
            >
              check all cars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
