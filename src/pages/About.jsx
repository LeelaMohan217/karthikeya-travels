import React from "react";
import { motion } from "framer-motion";
import image5 from "../assets/cars/svg/image5.svg";
import Details from "../components/Details";

const About = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-8 md:py-14 px-2">
        <div className="w-full bg-indigo-950 py-8 rounded-md">
          <h1 className="text-white text-3xl md:text-4xl py-4 text-center font-semibold">
            About Us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-indigo-950">
              Who We Are
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We are passionate about helping people explore the world on
              wheels. Our mission is to provide reliable, affordable, and
              stylish vehicles for every kind of traveler.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Whether you're taking a short trip across the city or embarking on
              a long journey with your loved ones, we’ve got the perfect vehicle
              to make your travel smooth and enjoyable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={image5}
              alt="Car"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-950 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Discover a curated collection of travel experiences with our
              modern fleet and personalized service.
            </p>
          </div>

          <div className="flex flex-col space-y-6">
            <div className="bg-gray-50 p-5 border-gray-300 border-b-1">
              <h3 className="text-indigo-950 font-semibold text-lg mb-2">
                🚗 Wide Fleet Selection
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Hatchbacks, sedans, SUVs, and MUVs – tailored for city drives,
                weekend getaways, and long journeys.
              </p>
            </div>

            <div className="bg-gray-50 p-5 border-gray-300 border-b-1">
              <h3 className="text-indigo-950 font-semibold text-lg mb-2">
                🌍 Personalized Travel Solutions
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Whether it's a spontaneous road trip or a pre-planned tour,
                we’ve got packages designed just for you.
              </p>
            </div>

            <div className="bg-gray-50 p-5 border-gray-300 border-b-1">
              <h3 className="text-indigo-950 font-semibold text-lg mb-2">
                🧳 Comfort & Safety First
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Every vehicle is cleaned, serviced, and ready. Your peace of
                mind is our top priority.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Details />
    </section>
  );
};

export default About;
