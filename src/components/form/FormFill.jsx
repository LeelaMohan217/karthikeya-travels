import React from "react";
import { Link } from "react-router-dom";

const FormFill = () => {
  return (
    <section className="w-full bg-white">
      <div className="px-6 py-20 relative overflow-hidden">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-orange-900 opacity-10 rounded-full z-0"></div>
        <div className="absolute -bottom-10 right-26 w-22 h-22 bg-orange-900 opacity-10 rounded-full z-0"></div>
        <div className="absolute -top-20 right-76 w-44 h-44 bg-orange-900 opacity-10 rounded-full z-0"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-semibold text-orange-900 mb-2">
            What are you looking for?
          </h2>
          <p className="text-sm md:text-base text-orange-800 tracking-wide">
            Fill out this form to book a ride with us.
          </p>

          <div className="mt-4 flex justify-center">
            <Link
              to="/form"
              className="px-5 py-3 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormFill;
