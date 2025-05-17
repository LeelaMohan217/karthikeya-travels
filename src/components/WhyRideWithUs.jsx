import React from "react";
import { rideFeatures } from "../constants";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motionVariants";

const WhyRideWithUs = () => {
  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-7xl mx-auto py-16 px-2 xl:px-0 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-indigo-950 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          Why ride with us?
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {rideFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="relative bg-white shadow-md rounded-2xl py-12 px-4 md:px-10 cursor-pointer border border-gray-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {/* Big faded icon in background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-indigo-900 z-0">
                  <Icon className="w-28 h-28 md:w-32 md:h-32" />
                </div>

                {/* Foreground text content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-indigo-950 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyRideWithUs;
