import React from 'react';
import { FaTruck, FaUndoAlt, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const Story = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800">
      {/* Header */}
      <header className="text-center py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Our Services</h1>
        <p className="mt-6 text-xl drop-shadow-md max-w-2xl mx-auto">
          We provide exceptional services to make your shopping experience seamless and enjoyable.
        </p>
      </header>

      {/* Services Section */}
      <section className="py-20 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Service 1 - Free Shipping */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaTruck className="text-6xl text-blue-600 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold">Free Shipping</h3>
            <p className="mt-4 text-gray-600">
              Enjoy free shipping on all orders over $50. Fast and reliable delivery to your doorstep.
            </p>
          </div>

          {/* Service 2 - Easy Returns */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaUndoAlt className="text-6xl text-blue-600 mx-auto mb-6 animate-spin-slow" />
            <h3 className="text-3xl font-bold">Easy Returns</h3>
            <p className="mt-4 text-gray-600">
              Not satisfied with your purchase? We offer easy and hassle-free returns within 30 days.
            </p>
          </div>

          {/* Service 3 - 24/7 Customer Support */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaHeadset className="text-6xl text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">24/7 Support</h3>
            <p className="mt-4 text-gray-600">
              Our customer support team is available around the clock to assist you with any inquiries.
            </p>
          </div>

          {/* Service 4 - Secure Payments */}
          <div className="bg-white p-10 rounded-xl shadow-lg text-center hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out">
            <FaShieldAlt className="text-6xl text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold">Secure Payments</h3>
            <p className="mt-4 text-gray-600">
              We use the latest security measures to protect your transactions and personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center">
        <h2 className="text-5xl font-extrabold drop-shadow-lg">Customer Satisfaction Guaranteed</h2>
        <p className="mt-8 text-lg max-w-3xl mx-auto">
          Our priority is to make your shopping experience seamless and enjoyable. Shop with confidence knowing that we’ve got your back!
        </p>
        <button className="mt-10 px-10 py-4 bg-white text-indigo-600 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out">
          Start Shopping
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Cartix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Story;

