import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import Details from "./components/Details";
import Details1 from "./components/Details1";
function App() {
  return (
    <>
      <Navbar />

      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="details1">
        <Details1 />
      </div>

      <div id="cars">
        <Cars />
      </div>

      <div id="details">
        <Details />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
