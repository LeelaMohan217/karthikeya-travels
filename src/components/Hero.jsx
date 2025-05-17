import React from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
  imageVariants,
} from "../utils/motionVariants";
import car from "../assets/cars/svg/car.svg"; // adjust path as needed
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full h-screen flex items-center bg-gradient-to-t from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto py-4 lg:px-8 px-2 xl:px-0">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <div className="text-left">
            <motion.p
              className="text-sm font-medium text-indigo-950 uppercase tracking-wider"
              variants={itemVariants}
            >
              Plan Your Destination
            </motion.p>

            <motion.h1
              className="text-4xl lg:text-7xl font-bold text-indigo-950"
              variants={itemVariants}
            >
              Save big with our car rentals
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-600 text-base md:text-lg"
              variants={itemVariants}
            >
              Explore top deals on rental cars across multiple destinations.
              Fast booking. Easy cancellations. No hidden charges.
            </motion.p>

            <motion.div
              className="mt-8 "
              variants={itemVariants}
            >
              <Link
                to="/form"
                className="px-10 md:px-12 py-3 font-light rounded-full text-sm md:text-base text-white text-center transition duration-500 ease-in-out bg-indigo-950 border-1 border-indigo-950 hover:text-indigo-950 hover:bg-white"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative w-full hidden md:flex justify-center md:justify-end"
            variants={imageVariants}
          >
            <img
              src={car}
              alt="Hero Car"
              className="relative z-10 w-full transition-all duration-500 ease-in-out"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
