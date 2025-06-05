import React from "react";
import { useLocation, useParams } from "react-router-dom";
import IndividualCarDetails from "../components/IndividualCarDetails";
import { cars } from "../constants";
import FormFill from "../components/FormFill";
import Vehicle from "../components/Vehicle";

const Cardetails = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const car = state?.car || cars.find((c) => String(c.id) === id);

  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto py-12 md:py-14 px-6">
          <div className="mt-16 md:mt-20">
            <h1 className="bg-orange-600 rounded-t-md text-white font-semibold px-4 py-2 text-xl">
              {car.name}
              {car.model}
            </h1>
          </div>
          <IndividualCarDetails car={car} />
        </div>
        <Vehicle />
        <FormFill />
      </section>
    </>
  );
};

export default Cardetails;
