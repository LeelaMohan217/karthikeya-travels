import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ViewAllCars = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-indigo-950 py-16 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Looking for More Options?
        </motion.h2>

        <motion.p
          className="text-gray-300 text-base md:text-lg mb-8"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          Browse our full fleet of cars — hatchbacks, sedans, SUVs, and more. We
          have something for every need and every road.
        </motion.p>

        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <Link
            to="/carsPage"
            className="inline-flex items-center bg-white text-indigo-950 font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            View All Cars
            <motion.span
              className="ml-2"
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ViewAllCars;
