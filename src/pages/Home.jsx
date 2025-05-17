import React from "react";
import Details from "../components/Details";
import CarBookingSection from "../components/CarBookingSection";
import Hero from "../components/Hero";
import WhyRideWithUs from "../components/WhyRideWithUs";
import Vehicle from "../components/Vehicle";
import Aboutsection from "../components/Aboutsection";
import ViewAllCars from "../components/ViewAllCars";

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutsection />
      <CarBookingSection />
      <WhyRideWithUs />
      <Vehicle />
      <ViewAllCars />
      <Details />
    </>
  );
};

export default Home;
