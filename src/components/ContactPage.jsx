import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get('message');
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');

    // Basic validation
    if (!message || !name || !email || !subject) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Success message
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    e.target.reset();
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        .contact-bg {
          background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .input-field {
          transition: all 0.3s ease;
        }

        .input-field:focus {
          outline: none;
          border-color: #ff6b35;
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }

        .send-btn {
          transition: all 0.3s ease;
        }

        .send-btn:hover {
          background-color: #ff6b35;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
        }

        .contact-item {
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateX(5px);
        }
      `}</style>

      <div className="contact-bg min-h-screen">
        <div className="bg-white bg-opacity-95 min-h-screen">
          <div className="max-w-7xl mx-auto px-6 py-28">
            {/* Header */}
            

            {/* Map Section */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <div className="h-96 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form and Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Get in Touch Form */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* Message */}
                  <div>
                    <textarea 
                      name="message"
                      className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 bg-white resize-none"
                      rows="5"
                      placeholder="Message"
                    />
                  </div>
                  
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <input 
                        type="text"
                        name="name"
                        className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 bg-white"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input 
                        type="email"
                        name="email"
                        className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 bg-white"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  
                  {/* Subject */}
                  <div>
                    <input 
                      type="text"
                      name="subject"
                      className="input-field w-full px-4 py-3 rounded-lg border border-gray-300 bg-white"
                      placeholder="Subject"
                    />
                  </div>
                  
                  {/* Send Button */}
                  <div>
                    <button 
                      type="submit" 
                      className="send-btn px-8 py-3 rounded-lg border-2 border-orange-500 text-orange-500 font-semibold uppercase tracking-wider"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Details */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Details</h3>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="contact-item flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        4671 Sugar Camp Road,<br />
                        Owatonna, Minnesota,<br />
                        55060
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="contact-item flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">507-475-6094</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="contact-item flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">info@company.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;