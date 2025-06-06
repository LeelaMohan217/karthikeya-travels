import React from "react";
import { cars } from "../../constants/index";
import Carcard from "./Carcard";

const Vehicle = () => {
  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-12 xl:px-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-12">
          Take a look at our premium fleet
        </h2>

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
