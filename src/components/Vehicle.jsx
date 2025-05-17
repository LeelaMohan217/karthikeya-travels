import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../utils/motionVariants";
import { cars } from "../constants/index";
import Carcard from "./subcomponent/Carcard";

const Vehicle = () => {
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
          Take a look at our premium fleet
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.slice(0, 3).map((car) => (
            <Carcard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicle;
