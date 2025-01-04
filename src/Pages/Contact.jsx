import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
      {/* Header */}
      <header className="text-center py-20 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Contact Us</h1>
        <p className="mt-6 text-xl drop-shadow-md max-w-2xl mx-auto">
          We're here to help. Reach out to us with any questions or feedback.
        </p>
      </header>

      {/* Contact Details Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Phone */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaPhoneAlt className="text-6xl text-purple-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">Call Us</h3>
            <p className="mt-4 text-gray-600">+1 (123) 456-7890</p>
          </div>

          {/* Email */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaEnvelope className="text-6xl text-purple-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">Email Us</h3>
            <p className="mt-4 text-gray-600">support@cartix.com</p>
          </div>

          {/* Address */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaMapMarkerAlt className="text-6xl text-purple-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">Visit Us</h3>
            <p className="mt-4 text-gray-600">123 Cartix Street, Commerce City, CA</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 text-white">
        <h2 className="text-5xl font-extrabold drop-shadow-lg text-center">Send Us a Message</h2>
        <div className="mt-10 max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
          <form className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
            <button
              type="submit"
              className="py-4 px-8 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cartix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
