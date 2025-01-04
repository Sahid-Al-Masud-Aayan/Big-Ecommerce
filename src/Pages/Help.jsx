import React from 'react';
import { FaQuestionCircle, FaLifeRing, FaBook, FaEnvelopeOpenText } from 'react-icons/fa';

const Help = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
      {/* Header */}
      <header className="text-center py-20 bg-gradient-to-r from-teal-600 via-blue-500 to-purple-600 text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Help & Support</h1>
        <p className="mt-6 text-xl drop-shadow-md max-w-2xl mx-auto">
          Find answers to common questions or contact our support team for assistance.
        </p>
      </header>

      {/* Help Options Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* FAQs */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaQuestionCircle className="text-6xl text-teal-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">FAQs</h3>
            <p className="mt-4 text-gray-600">Get quick answers to the most commonly asked questions.</p>
            <button className="mt-4 py-2 px-6 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">
              View FAQs
            </button>
          </div>

          {/* Contact Support */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaLifeRing className="text-6xl text-teal-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">Contact Support</h3>
            <p className="mt-4 text-gray-600">Need further assistance? Our support team is here to help.</p>
            <button className="mt-4 py-2 px-6 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">
              Get Support
            </button>
          </div>

          {/* Guides & Tutorials */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaBook className="text-6xl text-teal-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">Guides & Tutorials</h3>
            <p className="mt-4 text-gray-600">Learn how to make the most of our platform with step-by-step guides.</p>
            <button className="mt-4 py-2 px-6 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">
              View Guides
            </button>
          </div>

          {/* Email Us */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaEnvelopeOpenText className="text-6xl text-teal-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">Email Us</h3>
            <p className="mt-4 text-gray-600">Send us an email, and we'll get back to you as soon as possible.</p>
            <button className="mt-4 py-2 px-6 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">
              Send Email
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cartix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Help;
