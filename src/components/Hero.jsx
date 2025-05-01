import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1950&q=80"
        alt="Car Travel"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated Text Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 xl:px-0 text-left text-white space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.6 }}
            className="text-3xl w-full sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Discover the Road with{" "}
            <span className="text-orange-500">Sri Karthikeya Travels</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ amount: 0.6 }}
            className="text-base sm:text-lg md:text-2xl max-w-2xl text-white/90"
          >
            Explore scenic routes, reliable rides, and unforgettable journeys —
            your adventure begins here.
          </motion.p>

          <motion.a
            href="#cars"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ amount: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md text-base sm:text-lg font-semibold transition-all duration-300 ease-in-out shadow-md"
          >
            Book a Ride
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
