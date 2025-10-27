import React from "react";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white text-center">
      {/* Section Title */}
      <div className="mb-14">
        <p className="text-orange-500 font-medium text-sm mb-2">
          Services We Offer
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Best Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {/* Service 1 */}
        <div className="p-8 hover:shadow-lg transition bg-white rounded-xl">
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
              alt="chef icon"
              className="w-14 h-14"
            />
          </div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Best Chef</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        {/* Service 2 (Highlighted Middle Card) */}
        <div className="p-8 bg-white rounded-xl shadow-[0_10px_40px_rgba(255,100,0,0.08)] transition transform hover:-translate-y-1">
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="food icon"
              className="w-14 h-14"
            />
          </div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Quality Food
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        {/* Service 3 */}
        <div className="p-8 hover:shadow-lg transition bg-white rounded-xl">
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
              alt="cook icon"
              className="w-14 h-14"
            />
          </div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Perfect Cook
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
      </div>
    </section>
  );
}
