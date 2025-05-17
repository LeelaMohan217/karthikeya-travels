import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import About from "./pages/About";
import Cardetails from "./pages/Cardetails";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carspage" element={<CarsPage />} />
        <Route path="/cardetails" element={<Cardetails />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
