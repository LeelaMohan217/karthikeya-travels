import React from "react";
import Hero1 from "../components/home/Hero1";
import Aboutsection from "../components/home/Aboutsection";
import WhyRideWithUs from "../components/home/WhyRideWithUs";
import CarBookingSection from "../components/home/CarBookingSection";
import Vehicle from "../components/car/Vehicle";
import Details from "../components/home/Details";
import FormFill from "../components/form/FormFill";

const Home = () => {
  return (
    <>
      <Hero1 />
      <Aboutsection />
      <WhyRideWithUs />
      <CarBookingSection />
      <Vehicle />
      <Details />
      <FormFill />
    </>
  );
};

export default Home;
