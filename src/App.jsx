import "./App.css";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import CarsPage from "./pages/CarsPage";
import About from "./pages/About";
import Cardetails from "./pages/Cardetails";
import Form from "./pages/Form";

// ScrollToTop logic inside App
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
