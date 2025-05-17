import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Details = () => {
  return (
    <div className="bg-gradient-to-l from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto py-16 px-2 xl:px-0">
        <motion.div
          className="flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-950"
            variants={fadeInUp}
          >
            Ready to Travel in Comfort and Style?
          </motion.h2>

          <motion.p
            className="font-medium text-base lg:text-xl text-neutral-600 text-center mt-4"
            variants={fadeInUp}
          >
            Discover affordable, reliable, and safe travel with our premium car
            services.
          </motion.p>
          <motion.p
            className="font-normal text-sm lg:text-base text-center mt-4 text-indigo-950"
            variants={fadeInUp}
          >
            Whether you're heading out for a family vacation, a business trip,
            or a weekend escape, we’ve got the perfect ride for you. Our
            well-maintained fleet, professional drivers, and unbeatable prices
            ensure your journey is as smooth as your destination is exciting.
          </motion.p>

          <motion.div className="mt-8" variants={fadeInUp}>
            <Link
              to="/carsPage"
              className="px-8 md:px-12 py-3 font-normal rounded-full text-sm md:text-base text-white text-center transition duration-500 ease-in-out bg-indigo-950 border-1 border-indigo-950 hover:text-indigo-950 hover:bg-white"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
