import React from 'react';
import HeroImg from '/hero.webp'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-none"
        style={{
          backgroundImage: "url('https://preview.colorlib.com/theme/allfood/assets/img/hero/h1_hero.png.webp')"
        }}
      />
      
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/70" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto  py-20 text-left">
        
        {/* Small Text */}
        <p className="text-orange-500 text-lg md:text-xl font-medium mb-3 tracking-wide">
          Welcome to Our Restaurant
        </p>
        
        {/* Main Title */}
        <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-5xl xl:text-8xl font-bold mb-4 leading-tight">
          We Believe in <br />
          <span className="text-orange-500">Good Food</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-700 text-base md:text-sm lg:text-sm max-w-3xl mb-8 leading-relaxed">
          Experience the finest culinary delights crafted with passion and fresh ingredients. 
          Our chefs bring you authentic flavors that will tantalize your taste buds and 
          create unforgettable dining memories.
        </p>
        
        {/* Button */}
        <button className="bg-orange-500 hover:bg-red-600 text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          Resurvation
        </button>
        
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;