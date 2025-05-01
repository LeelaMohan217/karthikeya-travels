import React from "react";
import { motion } from "framer-motion";

// Import images from assets folder
import sedan from "../assets/cars/sedan.jpg";
import suv from "../assets/cars/suv.jpg";
import swift from "../assets/cars/swift.jpg";
import nexon from "../assets/cars/nexon.jpg";
import baleno from "../assets/cars/baleno.jpg";
import innova from "../assets/cars/innova.jpg";

// Car data
const cars = [
  { name: "Sedan", image: sedan, price: "₹15/km" },
  { name: "Innova", image: innova, price: "₹20/km" },
  { name: "SUV", image: suv, price: "₹18/km" },
  { name: "Swift", image: swift, price: "₹12/km" },
  { name: "Nexon", image: nexon, price: "₹25/km" },
  { name: "Baleno", image: baleno, price: "₹25/km" },
];
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

const Cars = () => {
  const carList = [...cars, ...cars]; // Duplicate for seamless infinite scroll

  return (
    <div className="overflow-hidden py-12 text-white">
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl font-bold text-orange-600 mb-10 text-center"
      >
        Our car options
      </motion.h1>

      <motion.div
        className="flex gap-16 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {carList.map((car, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="min-w-[280px] bg-white text-black rounded-xl shadow-md shadow-gray-300 overflow-hidden transition-transform duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-orange-600 font-bold">{car.price}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Cars;
