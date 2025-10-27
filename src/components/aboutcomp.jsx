import React from 'react'
import Homecard from '../components/HomeCard'

function About() {
  const handleBookTable = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      persons: formData.get('persons'),
      date: formData.get('date'),
      time: formData.get('time')
    }
    console.log('Booking data:', data)
    alert('Table booked successfully!')
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="slider-area">
        <div className="slider-height2 d-flex align-items-center bg-cover bg-center bg-fixed min-h-[400px]" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'}}>
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap hero-cap2 text-center mx-auto">
                  <h2 className="text-5xl font-bold text-white pt-28">About US</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Restaurant Section */}
      <section className="about-area2 py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="row align-items-center flex flex-col lg:flex-row items-center gap-16">
            <div className="col-lg-6 col-md-12 w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="about-img">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="About our restaurant" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 w-full lg:w-1/2">
              <div className="about-caption mb-20">
                <div className="section-tittle mb-12">
                  <span className="text-orange-400 font-semibold mb-2 block">About Our Restaurant</span>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">We Provide Good Food For Your Family!</h2>
                </div>
                <p className="pera-top text-gray-600 mb-6 leading-relaxed">
                  Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer
                </p>

                <p className="mb-12 pera-bottom text-gray-600 leading-relaxed">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected our, or randomised words which don't look even slightly believab If you are going to use a passage.
                </p>
                <a href="about.html" className="border-btn border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book A Table Section */}
      <section className="booking-area section-bg pt-32 pb-40 bg-cover bg-center bg-fixed " style={{backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md pb-16 py-4 rounded-2xl">
          <div className="row justify-content-center">
            <div className="cl-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle text-center mb-16">
                <span className="text-orange-400 font-semibold mb-2 block">About Our Restaurant</span>
                <h2 className="text-4xl font-bold text-white">Book A Table</h2>
              </div> 
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <form onSubmit={handleBookTable}>
                <div className="booking-wrap flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="single-select-box mb-8 md:mb-0 w-full md:w-auto">
                    <div className="select-this">
                      <div className="select-itms flex items-center bg-white rounded-lg px-4 py-3 shadow-lg">
                        <div className="select-icon mr-3">
                          <span className="text-gray-400">👤</span>
                        </div>
                        <select name="persons" className="w-full bg-transparent border-none focus:outline-none focus:ring-0">
                          <option value="">Person</option>
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="single-select-box mb-8 md:mb-0 w-full md:w-auto">
                    <div className="boking-datepicker">
                      <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-lg">
                        <span className="text-gray-400 mr-3">📅</span>
                        <input 
                          name="date"
                          type="date"
                          className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="single-select-box mb-8 md:mb-0 w-full md:w-auto">
                    <div className="boking-datepicker">
                      <div className="flex items-center bg-white rounded-lg px-4 py-3 shadow-lg">
                        <span className="text-gray-400 mr-3">🕒</span>
                        <input 
                          name="time"
                          type="time"
                          className="w-full bg-transparent border-none focus:outline-none focus:ring-0"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="single-select-box mb-8 md:mb-0 w-full md:w-auto">
                    <button type="submit" className="btn select-btn bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 w-full md:w-auto">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Your Test Section */}
    

  <section className="about-area3 pt-48 pb-44 relative">
  {/* Background Image with Blur and Black Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}
  >
    {/* Small black blur overlay */}
    <div className="absolute inset-0 bg-black/10 bg-opacity-30 backdrop-blur-sm"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="row justify-end flex justify-end">
      <div className="col-xl-6 col-lg-6 col-md-9 col-sm-11 w-full lg:w-1/2">
        <div className="section-tittle section-tittle2 mb-16">
          <span className="text-orange-400 font-semibold mb-2 block drop-shadow-md">Discover Your Test</span>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight drop-shadow-lg">We Provide Good Food For Your Family!</h2>
          <p className="text-white text-lg leading-relaxed drop-shadow-md">
            Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer.
          </p>
        </div> 
        <form onSubmit={handleSubscribe} className="search-box flex flex-col sm:flex-row gap-4">
          <div className="input-form flex-grow">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-6 py-4 rounded-lg border-1 border-orange-400 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>
          <div className="search-form">
            <button 
              type="submit"
              className="bg-orange-400 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </div>	
        </form>	
      </div>
    </div>
  </div>
</section>

      {/* Servicees We Offer Section */}
     <Homecard/>
    </div>
  )
}

export default About