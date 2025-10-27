import React, { useState } from 'react';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    persons: '',
    date: '',
    time: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Data:', formData);
    // Handle form submission here
  };

  return (
    <section className="relative w-full h-[500px] flex items-center justify-center py-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')"
        }}
      >
        {/* Blur overlay for better text readability */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-orange-400 text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Book a Table
          </h2>
          <p className="text-white text-lg drop-shadow-md">
            Book your table for an unforgettable dining experience
          </p>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col md:flex-row gap-4 items-end justify-center">
            {/* Person Selection */}
            <div className="flex-1 min-w-0 max-w-xs">
              <label className="block text-white text-sm font-medium mb-2 drop-shadow-md">
                Number of Guests
              </label>
              <select
                name="persons"
                value={formData.persons}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              >
                <option value="">Select Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5">5+ Persons</option>
              </select>
            </div>

            {/* Date Input */}
            <div className="flex-1 min-w-0 max-w-xs">
              <label className="block text-white text-sm font-medium mb-2 drop-shadow-md">
                Select Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            {/* Time Input */}
            <div className="flex-1 min-w-0 max-w-xs">
              <label className="block text-white text-sm font-medium mb-2 drop-shadow-md">
                Select Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex-1 min-w-0 max-w-xs">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Book Now
              </button>
            </div>
          </div>
        </form>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-white text-sm drop-shadow-md">
            For parties of 6 or more, please call us at{' '}
            <span className="text-orange-500 font-semibold">(555) 123-4567</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;