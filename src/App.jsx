import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
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

      <div id="cars">
        <Cars />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
