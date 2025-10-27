import React from 'react';

const FoodShowcase = () => {
  const foodItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2020",
      title: "Margherita Pizza",
      price: "$18"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Gourmet Burger",
      price: "$22"
    }
  ];

  return (
    <section className="w-full h-[550px] bg-gray-50">
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {/* First Food Item */}
        <div className="relative group overflow-hidden cursor-pointer lg:col-span-1">
          <img 
            src={foodItems[0].image}
            alt={foodItems[0].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-2xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {foodItems[0].title}
            </h3>
            <p className="text-white text-3xl font-semibold mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {foodItems[0].price}
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:scale-105">
              Order Now
            </button>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Second Food Item */}
        <div className="relative group overflow-hidden cursor-pointer lg:col-span-1">
          <img 
            src={foodItems[1].image}
            alt={foodItems[1].title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-2xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {foodItems[1].title}
            </h3>
            <p className="text-white text-3xl font-semibold mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {foodItems[1].price}
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:scale-105">
              Order Now
            </button>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Third Grid Item - 2 Columns with Featured Image */}
        <div className="relative group overflow-hidden cursor-pointer lg:col-span-2 col-span-1 md:col-span-2">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Chef's Special"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-white text-4xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
              Chef's Special
            </h3>
            <p className="text-white text-lg mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-center max-w-md">
              Experience our signature dish crafted with the finest ingredients
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150 hover:scale-105">
                View Menu
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200 hover:scale-105">
                Make Reservation
              </button>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default FoodShowcase;