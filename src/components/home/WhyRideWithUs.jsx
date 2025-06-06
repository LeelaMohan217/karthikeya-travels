import React from "react";
import { rideFeatures } from "../../constants";

const WhyRideWithUs = () => {
  return (
    <section className="w-full bg-neutral">
      <div className="max-w-7xl mx-auto px-6 py-20 xl:px-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
          Why{" "}
          <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
            ride with
          </span>{" "}
          us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {rideFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative bg-white shadow-lg  rounded-2xl py-12 px-4 md:px-10 cursor-pointer overflow-hidden border-l border-t border-orange-600"
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10 text-orange-900 z-0">
                  <Icon className="w-28 h-28 md:w-32 md:h-32" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyRideWithUs;
