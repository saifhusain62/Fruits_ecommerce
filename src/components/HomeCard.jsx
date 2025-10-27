import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Expert Chefs",
      description: "Our experienced chefs bring years of culinary expertise to create exceptional dishes using the finest ingredients and traditional cooking techniques.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem aliquid est explicabo aperiam. Odio deleniti fuga doloribus facere quis?"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Fine Dining",
      description: "Experience elegant dining in our sophisticated atmosphere with carefully curated menus that showcase both classic and contemporary flavors.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem aliquid est explicabo aperiam. Odio deleniti fuga doloribus facere quis?"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Fresh Ingredients",
      description: "We source only the freshest, locally-grown ingredients to ensure every bite delivers maximum flavor and nutritional value in every dish.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem aliquid est explicabo aperiam. Odio deleniti fuga doloribus facere quis?"
    }
  ];

  return (
    <section className="w-full py-28 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-lg font-medium tracking-wide uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-black text-4xl md:text-5xl font-bold">
            Why Choose Us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group hover:transform hover:scale-105 transition-transform"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20  rounded-3xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
