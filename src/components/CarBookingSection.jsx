import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  leftContentVariants,
  rightButtonsVariants,
} from "../utils/motionVariants";

const CarBookingSection = () => {
  return (
    <section className="w-full bg-indigo-950">
      <div className="max-w-7xl mx-auto py-16 px-2 xl:px-0 grid grid-cols-1 md:grid-cols-12 items-center gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={leftContentVariants}
          className="md:col-span-8 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left leading-tight">
            Choose Us for the Best Cars
          </h2>
          <p className="text-white text-center md:text-left font-light text-base md:text-normal">
            Drive with confidence in our top-rated cars, trusted by thousands of
            happy customers. Whether it's luxury, comfort, or reliability we’ve
            got you covered.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={rightButtonsVariants}
          className="md:col-span-4 flex flex-col md:flex-row items-center md:justify-end gap-4"
        >
          <Link
            to="/book"
            className="px-10 md:px-12 py-3 font-medium text-sm md:text-base text-white border border-white rounded-full bg-transparent hover:bg-white hover:text-indigo-950 transition duration-300"
          >
            Book Now
          </Link>
          <Link
            to="/carspage"
            className="px-10 md:px-12 py-3 font-medium rounded-full text-sm md:text-base text-indigo-950 bg-white hover:bg-indigo-950 hover:text-white border-1 border-white transition duration-300"
          >
            View Cars
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CarBookingSection;
