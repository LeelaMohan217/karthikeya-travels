import { Car } from "lucide-react";
import React from "react";
import { platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="relative bg-orange-600">
      <div className="relative max-w-7xl mx-auto py-4 px-8 xl:px-0">
        <div className="grid sm:grid-cols-2 gap-4 border-b border-neutral-100 py-10 lg:py-16 xl:py-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Car className="w-12 h-12 text-white font-bold hidden sm:block" />
              <h1 className="text-left text-2xl  lg:text-3xl text-white font-bold">
                Sri Karthikeya Travels
              </h1>
            </div>
            <p className=" text-left text-neutral-200 text-base font-extralight leading-6">
              At Sri Karthikeya Travels, we take pride in delivering a travel
              experience that’s built on trust, comfort, and reliability.Your
              journey is our commitment — safe, simple, and seamless.
            </p>
            <ul className="flex justify-evenly md:justify-normal gap-4 mt-6">
              {platformLinks.map((link, index) => (
                <li key={index} className="flex">
                  <a
                    className="text-neutral-200 border border-white rounded-full p-2 transition duration-1000 ease-in-out hover:bg-neutral-200 hover:text-orange-600"
                    href={link.href}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      className="text-neutral-200 text-base hover:text-white font-extralight"
                      href={link.href}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-white text-2xl font-semibold mb-4">
                Contact Info
              </h3>
              <p className="text-neutral-200 text-base font-extralight">
                Door No.5-69, Pedaparimi Village, Thullur Mandal, Guntur
                District, 522236, Andhra Pradesh
              </p>
              <p className="text-neutral-200 text-base font-extralight">
                +91 9876543210
              </p>
              <p className="text-neutral-200 text-base font-extralight">
                srikarthikeya@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h6 className="text-neutral-200 text-sm font-normal text-center">
            Copyright © 2025 Sri Karthikeya Travels. All rights reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
