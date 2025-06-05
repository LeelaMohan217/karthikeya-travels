import React from "react";
import { Link } from "react-router-dom";
import hero2 from "../assets/cars/hero2.jpg";
import { MapPin } from "lucide-react";

const Hero1 = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-6 md:px-0">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 items-center py-20">
            <div className="flex flex-col item-start justify-center space-y-6">
              <div className="flex flex-col justify-center items-center md:items-start md:space-y-6">
                <div className="p-[1px] rounded-full bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400 mb-2">
                  <div className="flex justify-center items-baseline gap-2 rounded-full py-2 px-4 bg-white">
                    <p className="text-orange-600 uppercase tracking-wide text-xs font-semibold">
                      Plan Your Destination
                    </p>
                    <MapPin className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold text-slate-800 text-center md:text-left md:leading-14">
                  Save big with <br />
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
                    Sri Karthikeya
                  </span>{" "}
                  car rentals
                </h2>
                <p className="hidden md:block text-base md:text-lg text-slate-800 text-center md:text-left">
                  Enjoy premium cars, 24/7 support, flexible plans, and seamless
                  customer service. Our glass-clear pricing and luxury
                  experience set us apart.
                </p>
              </div>

              <div className="hidden md:block">
                <div className="flex sm:flex-row flex-col item-start gap-6">
                  <Link
                    to="/about"
                    className="px-5 py-3 text-base border text-center border-orange-600 text-orange-600 rounded-md hover:bg-orange-200 transition-all duration-300 font-medium"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/form"
                    className="px-5 py-3 text-base text-center rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 font-medium"
                  >
                    Book a ride
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <img src={hero2} alt="Car" className="rounded-2xl" />
            </div>
            <p className="md:hidden text-base md:text-lg text-slate-800 mt-4 text-center md:text-left">
              Enjoy premium cars, 24/7 support, flexible plans, and seamless
              customer service. Our glass-clear pricing and luxury experience
              set us apart.
            </p>
            <div className="md:hidden block mt-4">
              <div className="flex sm:flex-row flex-col item-start gap-6">
                <Link
                  to="/about"
                  className="hidden md:block px-5 py-3 text-base border text-center border-orange-600 text-orange-600 rounded-md hover:bg-orange-200 transition-all duration-300 font-medium"
                >
                  Learn More
                </Link>
                <Link
                  to="/form"
                  className="px-5 py-3 text-base text-center rounded-full bg-black opacity-90 text-white transition-all duration-300 font-medium"
                >
                  Book a ride
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
