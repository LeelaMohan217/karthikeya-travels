import React from "react";
import { cars } from "../constants";
import { motion } from "framer-motion";
import Carcard from "../components/subcomponent/Carcard";

const groupedCars = {
  Hatchback: cars.filter((car) => car.category === "Hatchback"),
  Sedan: cars.filter((car) => car.category === "Sedan"),
  "Mini SUV": cars.filter((car) => car.category === "Mini SUV"),
  MUV: cars.filter((car) => car.category === "MUV"),
};

const CarsPage = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-8 md:py-14 px-2">
        <div className="w-full bg-indigo-950 py-8 rounded-md">
          <h1 className="text-white text-3xl md:text-4xl py-4 text-center font-semibold">
            Cars
          </h1>
        </div>

        <div className="py-12">
          <motion.h1
            className="text-4xl font-bold text-indigo-900 mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Full Fleet of Cars
          </motion.h1>

          <p className="text-gray-600 mb-6 text-lg">
            We offer a wide variety of vehicles to suit your style, need, and
            comfort. From compact hatchbacks to spacious MUVs — find the perfect
            ride for any journey.
          </p>

          <p className="text-gray-600 mb-6 text-lg">
            Whether you're planning a short city ride, a weekend getaway, or a
            family trip, our fleet is equipped to match every lifestyle. Our
            vehicles are well-maintained, fuel-efficient, and available at
            competitive prices.
          </p>

          <p className="text-gray-600 mb-12 text-lg">
            Browse through our categorized collection below. Each vehicle comes
            with detailed specifications and features to help you make an
            informed choice. Let your next ride be smooth, stylish, and
            stress-free.
          </p>
        </div>

        {Object.entries(groupedCars).map(([category, carList]) => (
          <div key={category} className="mb-16 text-left">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {carList.map((car) => (
                <Carcard key={car.id} car={car} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarsPage;
