import React from 'react';
import { FaTruck, FaUndoAlt, FaHeadset, FaShieldAlt } from 'react-icons/fa';

const Story = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="text-center py-12 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg">
          We provide exceptional services to enhance your shopping experience.
        </p>
      </header>

      {/* Services Section */}
      <section className="py-16 px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Service 1 - Free Shipping */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <FaTruck className="text-5xl text-blue-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Free Shipping</h3>
            <p className="mt-2 text-gray-600">
              Enjoy free shipping on all orders over $50. Fast and reliable delivery at your doorstep.
            </p>
          </div>

          {/* Service 2 - Easy Returns */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <FaUndoAlt className="text-5xl text-blue-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Easy Returns</h3>
            <p className="mt-2 text-gray-600">
              Not satisfied with your purchase? We offer easy and hassle-free returns within 30 days.
            </p>
          </div>

          {/* Service 3 - 24/7 Customer Support */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <FaHeadset className="text-5xl text-blue-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">24/7 Support</h3>
            <p className="mt-2 text-gray-600">
              Our customer support team is available around the clock to assist you with any inquiries.
            </p>
          </div>

          {/* Service 4 - Secure Payments */}
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <FaShieldAlt className="text-5xl text-blue-600 mx-auto" />
            <h3 className="text-2xl font-semibold mt-4">Secure Payments</h3>
            <p className="mt-2 text-gray-600">
              We use the latest security measures to protect your transactions and personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Section */}
      <section className="py-16 px-8 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-semibold">Customer Satisfaction Guaranteed</h2>
        <p className="mt-4 text-lg">
          Our priority is to make your shopping experience seamless and enjoyable. Shop with confidence knowing that we’ve got your back!
        </p>
        <button className="mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Start Shopping
        </button>
      </section>
    </div>
  );
};

export default Story;
