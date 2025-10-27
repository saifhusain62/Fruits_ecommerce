import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission here
    setEmail('');
  };

  return (
    <section className="relative w-full h-[500px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        {/* Small black blur overlay */}
        <div className="absolute inset-0  bg-black/50 bg-opacity-30 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-end">
          <div className="max-w-lg text-right">
            {/* Title */}
            <h2 className="text-white text-4xl md:text-5xl font-semibold mb-6 drop-shadow-lg">
              Stay Updated
            </h2>

            {/* Description */}
            <p className="text-white text-lg mb-8 leading-relaxed drop-shadow-md">
              Subscribe to our newsletter and be the first to know about our special 
              offers, new menu items, and exclusive events. Join our food-loving 
              community today!
            </p>

            {/* Email Subscription Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white text-gray-700 rounded-lg border-2 border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            {/* Additional Info */}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;