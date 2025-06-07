import React from "react";
import car3 from "../assets/cars/svg/car3.svg";
import { CarFront, Flame } from "lucide-react";

const About = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-900 tracking-tight">
              Who We Are
            </h2>
            <p className="text-gray-700 text-sm md:text-base tracking-wide leading-relaxed">
              We are passionate about helping people explore the world on
              wheels. Our mission is to provide reliable, affordable, and
              stylish vehicles for every kind of traveler.
            </p>
            <p className="text-gray-700 text-sm md:text-base tracking-wide leading-relaxed">
              Whether you're taking a short trip across the city or embarking on
              a long journey with your loved ones, we’ve got the perfect vehicle
              to make your travel smooth and enjoyable.
            </p>
          </div>

          <div>
            <img
              src={car3}
              alt="Car"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex items-center text-slate-800 space-x-1">
                <Flame className="text-slate- w-5 h-5" />
                <p className="text-base md:text-lg">We Offer</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 tracking-tight">
                What We Offer
              </h2>
            </div>
            <p className="text-gray-600 text-sm md:text-base tracking-wide leading-relaxed">
              Discover a curated collection of travel experiences with our
              modern fleet and personalized service.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="bg-gray-50 p-5 shadow-lg  border-l-4 border border-slate-300 rounded-lg">
              <CarFront className="text-orange-500 bg-orange-100 px-4 py-2 w-16 h-16 rounded-xl mb-2" />

              <h3 className="text-slate-800 font-semibold text-base md:text-lg tracking-tight mb-2">
                Wide Fleet Selection
              </h3>
              <p className="text-slate-700 text-sm md:text-base tracking-wide leading-relaxed">
                Hatchbacks, sedans, SUVs, and MUVs – tailored for city drives,
                weekend getaways, and long journeys.
              </p>
            </div>

            <div className="bg-gray-50 p-5 shadow-lg  border-l-4 border border-slate-300 rounded-lg">
              <h3 className="text-slate-800 font-semibold text-base md:text-lg tracking-tight mb-2">
                🌍 Personalized Travel Solutions
              </h3>
              <p className="text-slate-700 text-sm md:text-base tracking-wide leading-relaxed">
                Whether it's a spontaneous road trip or a pre-planned tour,
                we’ve got packages designed just for you.
              </p>
            </div>

            <div className="bg-gray-50 p-5 shadow-lg  border-l-4 border border-slate-300 rounded-lg">
              <h3 className="text-slate-800 font-semibold text-base md:text-lg tracking-tight mb-2">
                🧳 Comfort & Safety First
              </h3>
              <p className="text-slate-700 text-sm md:text-base tracking-wide leading-relaxed">
                Every vehicle is cleaned, serviced, and ready. Your peace of
                mind is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
