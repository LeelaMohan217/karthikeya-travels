import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";

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
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="relative max-w-7xl mx-auto py-4 lg:px-8 px-8 xl:px-0">
          <div className="flex justify-between items-center transition-all duration-500">
            <div className="flex items-center">
              <a href="/" className="flex items-center flex-shrink-0">
                <span className="text-sm md:text-base lg:text-xl sm:block tracking-tight text-orange-600 font-semibold transition-colors duration-300">
                  SRI KARTHIKEYA TRAVELS
                </span>
              </a>
            </div>

            <ul className="hidden lg:flex ml-12 space-x-10 transition-all duration-500">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group text-base text-black hover:text-orange-600 transition-colors duration-300"
                >
                  <a
                    href={item.href}
                    onClick={() => {
                      scrollToTop();
                      closeNavbar();
                    }}
                    className="inline-block relative"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="#hero"
                className="hidden lg:block bg-orange-600 text-white font-normal text-base lg:text-base px-4 md:px-6 py-3 rounded hover:bg-orange-700 transition-all duration-300"
              >
                <span>Get started</span>
              </a>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button
                onClick={toggleNavbar}
                className="transition-all duration-300"
              >
                {mobileDrawerOpen ? (
                  <X className="text-black transition-all duration-300" />
                ) : (
                  <Menu className="text-black transition-all duration-300" />
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
                className="py-2 text-sm md:text-lg text-black hover:text-orange-600 transition-colors duration-300"
              >
                <a href={item.href} onClick={closeNavbar}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
