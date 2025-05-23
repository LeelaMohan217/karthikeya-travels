import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const closeNavbar = () => {
    setMobileDrawerOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative max-w-7xl mx-auto py-4 lg:px-8 px-2 xl:px-0">
          <div className="flex justify-between items-center transition-all duration-500">
            <div className="flex items-center">
              <a href="/" className="flex items-center flex-shrink-0">
                <span className="text-xl md:text-2xl lg:text-3xl sm:block tracking-tight text-indigo-950 font-bold transition-colors duration-300">
                  SK
                </span>
              </a>
            </div>

            <ul className="hidden lg:flex ml-12 space-x-10 transition-all duration-500">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group text-base text-indigo-950 transition-colors duration-300"
                >
                  <Link
                    to={item.href}
                    onClick={() => {
                      scrollToTop();
                      closeNavbar();
                    }}
                    className="inline-block relative"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-950 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <Link
                to="/form"
                className="hidden lg:block px-10 md:px-12 py-3 font-light rounded-full text-sm md:text-base text-white text-center transition duration-500 ease-in-out bg-indigo-950 border-1 border-indigo-950 hover:text-indigo-950 hover:bg-white"
              >
                Get started
              </Link>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button
                onClick={toggleNavbar}
                className="transition-all duration-300"
              >
                {mobileDrawerOpen ? (
                  <X className="text-indigo-950 transition-all duration-300" />
                ) : (
                  <Menu className="text-indigo-950 transition-all duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 left-0 z-40 h-screen p-6 bg-white w-[75%] lg:hidden border-r border-gray-300 backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
            mobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h5 className="text-base font-semibold text-black uppercase border-b border-gray-300">
            Menu
          </h5>
          <ul className="mt-6 space-y-2">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="py-2 text-sm md:text-lg text-indigo-950 hover:text-indigo-950 transition-colors duration-300"
              >
                <Link to={item.href} onClick={closeNavbar}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
