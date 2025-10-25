import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background Image with Blur Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200')",
          filter: 'blur(8px)',
          opacity: '0.3'
        }}
      />
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />
      
      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* 1st Grid - Logo */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-orange-500">FoodHub</h2>
              <p className="text-sm text-gray-400 mt-2">Delicious Food Delivered</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">📍 123 Food Street, NY</p>
              <p className="text-gray-400 text-sm mt-2">📞 +1 234 567 8900</p>
              <p className="text-gray-400 text-sm mt-2">✉️ info@foodhub.com</p>
            </div>
          </div>

          {/* 2nd Grid - Menu Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-orange-500 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange-500 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> About
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-orange-500 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Menu
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange-500 transition duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd Grid - Food Pictures */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="overflow-hidden rounded-lg hover:scale-105 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200" 
                  alt="Pizza"
                  className="w-full h-20 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg hover:scale-105 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200" 
                  alt="Burger"
                  className="w-full h-20 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg hover:scale-105 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200" 
                  alt="Salad"
                  className="w-full h-20 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg hover:scale-105 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200" 
                  alt="Breakfast"
                  className="w-full h-20 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg hover:scale-105 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200" 
                  alt="Pasta"
                  className="w-full h-20 object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg hover:scale-105 transition duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=200" 
                  alt="Dessert"
                  className="w-full h-20 object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4th Grid - Company Description */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-500">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are passionate about delivering the finest quality food right to your doorstep. 
              With over 10 years of experience, we pride ourselves on fresh ingredients, 
              authentic recipes, and exceptional customer service.
            </p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 FoodHub. All rights reserved. | Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;