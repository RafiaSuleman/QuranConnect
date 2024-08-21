'use client'

// app/contact.tsx or pages/contact.tsx
import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaQuran } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredDate: '',
      preferredTime: '',
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-30px] left-0 w-full h-48 bg-gradient-to-r from-emerald-600 to-teal-500 transform -skew-y-6"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-300 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-[15%] left-1/4 w-32 h-32 bg-emerald-300 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 mt-6 relative z-10">
        <h1 className="text-5xl font-bold text-center text-white mb-16 shadow-text">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold mt-6 text-emerald-700 mb-8 flex items-center">
              <FaQuran className="mr-3 text-amber-500" />
              Get in Touch
            </h2>
            <div className="space-y-6">
              <p className="flex items-center text-gray-700 text-lg">
                <FaEnvelope className="mr-3 text-amber-500 text-2xl" />
                info@quranconnect.com
              </p>
              <p className="flex items-center text-gray-700 text-lg">
                <FaPhone className="mr-3 text-amber-500 text-2xl" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center text-gray-700 text-lg">
                <FaMapMarkerAlt className="mr-3 text-amber-500 text-2xl" />
                123 Quran St, Islamic City, 12345
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-emerald-700 mb-8">Book a Free Trial</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold py-3 px-4 rounded-md hover:from-emerald-600 hover:to-teal-600 transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </main>
  );
}