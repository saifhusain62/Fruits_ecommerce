import React from 'react';

const DiscoverSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* 1st Grid - Content */}
          <div>
            {/* Small Text */}
            <p className="text-orange-500 text-lg md:text-xl font-medium mb-4">
              Discover Our Food
            </p>
            
            {/* Title */}
            <h2 className="text-gray-900 text-5xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
              We Provide Good Food For Your Family
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Our restaurant has been serving delicious and authentic cuisine for over a decade. 
              We take pride in using only the freshest ingredients and traditional cooking methods 
              to bring you meals that feel just like home. Every dish is prepared with love and care 
              to ensure your family gets the best dining experience.
            </p>
            
            {/* 4 Icon Descriptions */}
            <div className="space-y-4">
              
              {/* Icon 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">Fresh Ingredients Daily</h3>
                  <p className="text-gray-600 text-sm">We source the finest and freshest ingredients every morning from local farms.</p>
                </div>
              </div>
              
              {/* Icon 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">Experienced Chefs.</h3>
                  <p className="text-gray-600 text-sm">Our team of professional chefs has years of culinary expertise and passion.</p>
                </div>
              </div>
              
              {/* Icon 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">Quality Guaranteed</h3>
                  <p className="text-gray-600 text-sm">Every dish meets our high standards of taste, presentation, and nutrition.</p>
                </div>
              </div>
              
              {/* Icon 4 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-1">Fast Service</h3>
                  <p className="text-gray-600 text-sm">Quick preparation and delivery without compromising on quality or taste.</p>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* 2nd Grid - Chef Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://preview.colorlib.com/theme/allfood/assets/img/gallery/about.png.webp" 
                alt="Professional Chef"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-2xl w-32 h-32 -z-10"></div>
            <div className="absolute -top-6 -left-6 bg-orange-200 rounded-full w-24 h-24 -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;