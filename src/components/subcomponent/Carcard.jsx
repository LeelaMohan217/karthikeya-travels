import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Car, ArrowRight } from "lucide-react";

const Carcard = ({ car }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-md inset-ring-1 inset-ring-orange-900/50 border border-gray-200 w-full max-w-sm mx-auto mb-8 hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-5 h-5 text-orange-900" />
            <span className="font-semibold text-orange-900 text-base">
              {car.name}
            </span>
          </div>
          <span className="text-orange-900/50 text-sm">{car.model}</span>
        </div>

        <div className="flex justify-end">
          <Link
            to={`/cardetails/${car.id}`}
            className="flex items-center text-sm font-medium text-orange-900  transition"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            View Details
            <span
              className="ml-1"
            >
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carcard;
