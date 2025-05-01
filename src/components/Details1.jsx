import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Details1 = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 xl:px-0 my-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="space-y-4">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-orange-600"
            variants={fadeInUp}
          >
            Unlock your potential and transform your life today!
          </motion.h1>
          <motion.p
            className="text-base font-light text-neutral-800 text-justify"
            variants={fadeInUp}
          >
            Don't wait any longer. Take action today and embark on an exciting
            journey to achieve your goals. Let us guide you through the process
            and help you unleash your true potential.
          </motion.p>
        </div>
        <motion.div
          className="flex justify-center items-center space-x-4"
          variants={fadeInUp}
        >
          <a
            href="/about"
            className="bg-orange-600 rounded-sm text-white font-normal text-base lg:text-base px-4 md:px-6 py-3 hover:bg-orange-700 transition-all duration-500"
          >
            Learn More
          </a>
          <a
            href="/"
            className="border rounded-sm border-neutral-500 font-normal text-base lg:text-base px-4 md:px-6 py-3 hover:border-orange-600 hover:text-orange-600 transition-all duration-500"
          >
            Book Ride
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Details1;
