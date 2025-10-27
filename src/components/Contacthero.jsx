import React from 'react';

const ContactSection = () => {
  return (
    <section className="relative h-[400px] md:h-[400px] w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Food Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80')`,
          }}
        >
          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Image */}
              

              {/* Right Side - Contact Text */}
              <div className="text-white space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                  Contact Us
                </h2>
              
                
                {/* Contact Info */}
               
                {/* CTA Button */}
                <button className="mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transform transition hover:scale-105 shadow-lg">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;