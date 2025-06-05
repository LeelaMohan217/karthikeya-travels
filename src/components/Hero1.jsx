import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/cars/hero.jpg";
import { MapPin } from "lucide-react";

const Hero1 = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto py-8 md:py-12 px-6 md:px-0">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="flex flex-col item-center justify-center space-y-6">
            <div className="flex flex-col justify-center items-center space-y-6">
              <div className="p-[1px] rounded-full bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400 mb-2">
                <div className="flex justify-center items-baseline gap-2 rounded-full py-2 px-4 bg-white">
                  <p className="text-orange-600 uppercase tracking-wide text-xs font-semibold">
                    Plan Your Destination
                  </p>
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold  text-orange-600 text-center">
                Save big with <br /> <span>Sri</span> {" "}
                <span className="bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400 bg-clip-text text-transparent">
                  Karthikeya
                </span>{" "}
                car rentals
              </h2>
              <p className="text-base md:text-lg text-orange-800 text-center">
                Enjoy premium cars, 24/7 support, flexible plans, and seamless
                customer service. Our glass-clear pricing and luxury experience
                set us apart.
              </p>
            </div>

            <div className="flex sm:flex-row flex-col justify-center item-center gap-6">
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
          <div className="block md:hidden">
            <img
              src={hero}
              alt="Car"
              className="rounded-2xl"
              style={{ boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.4)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
