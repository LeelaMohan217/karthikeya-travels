import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/cars/hero.jpg";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto z-10 px-6 py-12">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col justify-center items-center space-y-6">
              <div className="flex justify-center items-baseline gap-2 border-orange-600 border rounded-full mb-2 py-2 px-4">
                <p className="text-orange-600 uppercase tracking-wide text-sm font-semibold text-left md:text-center  ">
                  Plan Your Destination
                </p>
                <MapPin className=" w-4 h-4 text-orange-600" />
              </div>
              <h2 className="text-6xl font-bold  text-orange-600 text-left md:text-center leading-16">
                Save big with <br />{" "}
                <span className="bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400 bg-clip-text text-transparent">
                  Sri Karthikeya
                </span>{" "}
                car rentals
              </h2>
              <p className="text-base md:text-lg text-orange-800  text-left md:text-center">
                Enjoy premium cars, 24/7 support, flexible plans, and seamless
                customer service. Our glass-clear pricing and luxury experience
                set us apart.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              <Link
                to="/about"
                className="px-5 py-3 text-base border border-orange-600 text-orange-600 rounded-md hover:bg-orange-200 transition-all duration-300 font-medium"
              >
                Learn More
              </Link>
              <Link
                to="/form"
                className="px-5 py-3 text-base rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 font-medium"
              >
                Book a ride
              </Link>
            </div>
          </div>
          <div className="block md:hidden">
            <img src={hero} alt="Car" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
