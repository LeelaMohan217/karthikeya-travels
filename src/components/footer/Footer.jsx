import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { platformLinks, communityLinks, helpfulLinks } from "../../constants";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-orange-600">
        <div className="relative max-w-7xl mx-auto py-4 px-6 xl:px-0">
          <div className="grid items-start sm:grid-cols-3 gap-4 md:gap-6 lg:gap-10 border-b border-neutral-100 py-10 lg:py-12">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-left text-2xl lg:text-3xl text-white font-bold">
                Sri Karthikeya Travels
              </h1>
              <p className="text-left text-neutral-100 text-sm font-normal leading-6 tracking-wide">
                At Sri Karthikeya Travels, we take pride in delivering a travel
                experience that’s built on trust, comfort, and reliability. Your
                journey is our commitment — safe, simple, and seamless.
              </p>
              <ul className="flex justify-evenly md:justify-normal space-x-6">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {communityLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        className="text-neutral-100 text-sm hover:text-white font-normal tracking-wide"
                        href={link.href}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-4">
                  Helpful Links
                </h3>
                <ul className="space-y-2">
                  {helpfulLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        className="text-neutral-100 text-sm hover:text-white font-normal tracking-wider"
                        href={link.href}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-white text-lg font-semibold mb-4">
                  Reach Us
                </h3>
                <div className="flex items-start gap-4">
                  <MapPin className="text-neutral-100 w-10 h-10" />
                  <p className="text-neutral-100 text-sm  tracking-wide">
                    Door No.5-69, Pedaparimi Village, Thullur Mandal, Guntur
                    District, 522236, Andhra Pradesh
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-neutral-100 w-5 h-5" />
                  <p className="text-neutral-100 text-sm">
                    srikarthikeya@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-neutral-100 w-5 h-5" />
                  <p className="text-neutral-100 text-sm">+91 9876543210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6">
            <h6 className="text-neutral-100 text-sm font-normal text-center">
              Copyright © 2025 Sri Karthikeya Travels. All rights reserved.
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
