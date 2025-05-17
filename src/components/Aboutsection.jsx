import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/motionVariants"; // adjust path

const Aboutsection = () => {
  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-7xl mx-auto py-16 px-2 xl:px-0">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
            About Sri Karthikeya Travels
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reliable. Comfortable. Affordable. Your trusted travel partner.
          </p>
        </motion.div>

        {/* Paragraphs with staggered animation */}
        <motion.div
          className="text-gray-700 text-base lg:text-lg text-center md:text-justify"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[
            `At Sri Karthikeya Travels, we take pride in delivering safe, timely, and convenient transportation services across multiple cities. With years of experience and a growing network of satisfied customers, we have built a name synonymous with reliability and comfort.`,
            `Whether it’s a spiritual trip, a weekend getaway, or corporate travel, we offer clean, air-conditioned vehicles and courteous drivers who prioritize your safety and satisfaction. We understand that travel is more than reaching a destination — it’s about the experience along the way.`,
            `Our goal is to provide a hassle-free journey, from booking to drop-off. We are constantly upgrading our services and fleet to meet your evolving needs. Join thousands of happy passengers who trust Sri Karthikeya Travels for every ride.`,
            `Experience the journey with us — where every mile is driven with care, comfort, and commitment.`,
          ].map((text, i) => (
            <motion.p key={i} className="mb-6" variants={itemVariants}>
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Aboutsection;
