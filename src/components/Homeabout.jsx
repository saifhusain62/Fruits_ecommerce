import React from 'react';

const AboutRestaurant = () => {
  return (
    <section className="w-full py-36 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* First Column - Food Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant Food"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            {/* Optional decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Second Column - Text Content */}
          <div className="space-y-6">
            {/* Orange subtitle */}
            <p className="text-orange-500 text-lg font-medium tracking-wide uppercase">
              About Our Restaurant
            </p>

            {/* Main title */}
            <h2 className="text-black text-4xl md:text-5xl font-bold leading-tight">
              We Provide Good Food For Your Family!
            </h2>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                Our story began with a simple belief that everyone deserves access to fresh, 
                delicious, and wholesome meals. We source the finest ingredients from local 
                farms and prepare each dish with love and attention to detail.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                From our signature dishes to seasonal specialties, every meal is crafted 
                to bring families together and create lasting memories around the dinner table. 
                Experience the perfect blend of traditional recipes and modern culinary techniques.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <button className="group border-2 border-orange-500 text-black px-8 py-3 rounded-sm font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Learn More
              </button>
            </div>

            {/* Optional stats or features */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRestaurant;