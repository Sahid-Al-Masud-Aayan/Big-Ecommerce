import React from 'react';
import { FaTruck, FaBox, FaDollarSign, FaHandsHelping } from 'react-icons/fa';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
      {/* Header */}
      <header className="text-center py-20 bg-gradient-to-r from-green-600 via-green-500 to-teal-600 text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Shipping Information</h1>
        <p className="mt-6 text-xl drop-shadow-md max-w-2xl mx-auto">
          Learn about our shipping policies and how we ensure timely delivery.
        </p>
      </header>

      {/* Shipping Details Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Cartix */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaBox className="text-6xl text-green-600 mx-auto mb-6 animate-ping" />
            <h3 className="text-3xl font-bold">About Cartix</h3>
            <p className="mt-4 text-gray-600">
              Cartix, founded in 2021, offers a wide range of e-commerce products with reliable and fast delivery.
            </p>
          </div>

          {/* Shipping Policy */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaTruck className="text-6xl text-green-600 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold">Fast Shipping</h3>
            <p className="mt-4 text-gray-600">
              We ensure quick delivery across all regions. Free shipping for orders above $50.
            </p>
          </div>

          {/* Affordable Rates */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaDollarSign className="text-6xl text-green-600 mx-auto mb-6 animate-spin" />
            <h3 className="text-3xl font-bold">Affordable Rates</h3>
            <p className="mt-4 text-gray-600">
              Our shipping rates are highly competitive to provide maximum value for your money.
            </p>
          </div>

          {/* Support Team */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaHandsHelping className="text-6xl text-green-600 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold">Support Team</h3>
            <p className="mt-4 text-gray-600">
              Our dedicated support team is available to assist you with any shipping queries.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Assurance Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-5xl font-extrabold drop-shadow-lg">Shipping You Can Trust</h2>
        <p className="mt-8 text-lg max-w-3xl mx-auto">
          At Cartix, we prioritize your satisfaction. Enjoy seamless shopping with reliable delivery every time.
        </p>
        <button className="mt-10 px-10 py-4 bg-white text-teal-600 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
          Explore Products
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cartix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Shipping;

