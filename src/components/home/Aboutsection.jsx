import React from "react";
const Aboutsection = () => {
  return (
    <section className="w-full bg-neutral-100">
      <div className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
        {/* Heading Section */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
            About {" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent">
              Sri Karthikeya{" "}
            </span>
            Travels
          </h2>
          <p className="text-slate-800 text-lg max-w-2xl mx-auto font-bold tracking-wide font-shadow">
            Reliable. Comfortable. Affordable. Your trusted travel partner.
          </p>
        </div>

        <div className="text-slate-800 text-base md:text-lg text-justify">
          {[
            `At Sri Karthikeya Travels, we take pride in delivering safe, timely, and convenient transportation services across multiple cities. With years of experience and a growing network of satisfied customers, we have built a name synonymous with reliability and comfort.`,
            `Whether it’s a spiritual trip, a weekend getaway, or corporate travel, we offer clean, air-conditioned vehicles and courteous drivers who prioritize your safety and satisfaction. We understand that travel is more than reaching a destination — it’s about the experience along the way.`,
            `Our goal is to provide a hassle-free journey, from booking to drop-off. We are constantly upgrading our services and fleet to meet your evolving needs. Join thousands of happy passengers who trust Sri Karthikeya Travels for every ride.`,
            `Experience the journey with us — where every mile is driven with care, comfort, and commitment.`,
          ].map((text, i) => (
            <p key={i} className="mb-6">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
