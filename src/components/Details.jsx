import React from "react";
import { motion } from "framer-motion";

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
      <div className="max-w-7xl mx-auto py-8 md:py-14 px-8">
        <motion.div
          className="flex flex-col items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600"
            variants={fadeInUp}
          >
            Ready to Elevate Your Business?
          </motion.h2>

          <motion.p
            className="font-medium text-sm lg:text-base text-neutral-600 text-center mt-4"
            variants={fadeInUp}
          >
            Contact us today to discuss how our custom software solutions can
            take your business to the next level. Let's innovate together!
          </motion.p>

          <motion.div className="mt-8" variants={fadeInUp}>
            <a
              href="/contact"
              className="px-4 md:px-6 py-3 font-normal rounded-sm text-sm md:text-base text-white text-center transition duration-500 ease-in-out bg-orange-600 hover:bg-orange-700 active:bg-orange-700 focus:outline-none focus:ring focus:ring-red-300"
            >
              Get Started
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
