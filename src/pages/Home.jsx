import React from "react";
import Details from "../components/Details";
import CarBookingSection from "../components/CarBookingSection";
import WhyRideWithUs from "../components/WhyRideWithUs";
import Vehicle from "../components/Vehicle";
import Aboutsection from "../components/Aboutsection";
import FormFill from "../components/FormFill";
import Hero1 from "../components/Hero1";

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
