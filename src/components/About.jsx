import React from "react";
import { motion } from "framer-motion";
import car2 from "../assets/car2.jpg";

const About = () => {
  // Animation variants
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 xl:px-0 my-16 text-white">
      {/* Animated Heading */}
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl font-bold text-orange-600 mb-10 text-center"
      >
        About Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Animated Text Content */}
        <motion.div
          variants={fadeInFromLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="space-y-5 text-center md:text-left"
        >
          <h2 className="text-2xl font-semibold text-black text-left">
            Explore the World with Us
          </h2>
          <p className="text-black text-base leading-relaxed text-left">
            At{" "}
            <span className="text-orange-500 font-semibold">
              Sri Karthikeya Travels
            </span>
            , we specialize in creating unforgettable travel experiences.
            Whether you're looking to unwind on a beach, hike through mountains,
            or explore vibrant cities, we have the perfect package for you.
          </p>
          <p className="text-black text-base leading-relaxed text-left">
            With personalized itineraries, experienced guides, and 24/7 support,
            our mission is to make your journey as seamless and enjoyable as
            possible. Join thousands of happy travelers who trust us for their
            adventures around the globe.
          </p>
        </motion.div>

        {/* Animated Image with Hover Effect */}
        <motion.div
          variants={fadeInFromRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.img
            src={car2}
            alt="Travel Adventure"
            className="rounded-2xl shadow-lg w-full h-auto object-cover max-h-[450px] mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
