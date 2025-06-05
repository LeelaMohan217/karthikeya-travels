import React from "react";
import {
  CarFrontIcon,
  CarTaxiFrontIcon,
  FuelIcon,
  PersonStanding,
} from "lucide-react";

const IndividualCarDetails = ({ car }) => {
  return (
    <>
      <div className="w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-48 md:h-96 object-cover rounded-lg mb-6"
          />
          <p className="text-gray-800 text-sm md:text-base">
            {car.description || "No description provided for this vehicle."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6 text-sm md:text-base text-gray-800 text-center">
          <div className="shadow-2xl/30 inset-ring-1 inset-ring-orange-900/50 rounded-md p-4 flex justify-center items-center gap-2">
            <FuelIcon /> Fuel Type:{" "}
            <span className="font-medium">{car.fuelType}</span>
          </div>
          <div className="shadow-2xl/30 inset-ring-1 inset-ring-orange-900/50 rounded-md p-4 flex justify-center items-center gap-2">
            <CarFrontIcon /> Seating:{" "}
            <span className="font-medium">{car.seatingCapacity}</span>
          </div>
          <div className="shadow-2xl/30 inset-ring-1 inset-ring-orange-900/50 rounded-md p-4 flex justify-center items-center gap-2">
            <CarTaxiFrontIcon /> Mileage:{" "}
            <span className="font-medium">{car.mileage}</span>
          </div>
          <div className="shadow-2xl/30 inset-ring-1 inset-ring-orange-900/50 rounded-md p-4 flex justify-center items-center gap-2">
            <PersonStanding /> Drive:{" "}
            <span className="font-medium">{car.driveType}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndividualCarDetails;
