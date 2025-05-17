import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Car, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Carcard = ({ car }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 w-full max-w-sm mx-auto mb-8 hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-5 h-5 text-indigo-600" />
            <span className="font-semibold text-gray-900 text-base">
              {car.name}
            </span>
          </div>
          <span className="text-indigo-500 text-sm">{car.model}</span>
        </div>

        <div className="flex justify-end">
          <Link
            to="/cardetails"
            className="flex items-center text-sm font-medium text-indigo-800 hover:underline transition"
            onMouseEnter={() => setHovered(true)} // <-- set hovered true on hover
            onMouseLeave={() => setHovered(false)} // <-- set hovered false on leave
          >
            View Details
            <motion.span
              className="ml-1"
              animate={{ x: hovered ? 5 : 0 }} // <-- animate based on hovered state
              whileTap={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carcard;
