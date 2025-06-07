import React from "react";
import Hero1 from "../components/home/Hero1";
import WhyRideWithUs from "../components/home/WhyRideWithUs";
import Vehicle from "../components/car/Vehicle";
import Counters from "../components/counter/Counters";

const Home = () => {
  return (
    <>
      <Hero1 />
      <Counters />
      <WhyRideWithUs />
      <Vehicle />
    </>
  );
};

export default Home;
