import React from 'react';
import Navbar2 from '../Components/Navbar2';

const About = () => {
    return (
        <>
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-600">
          Welcome to [Your Store Name], your number one source for all things [product category].
          We're dedicated to giving you the best shopping experience, with a focus on customer service,
          product quality, and uniqueness. Founded in [year], [Your Store Name] has come a long way from its beginnings.
          We now serve customers all over [country/world] and are thrilled to be a part of the [e-commerce industry type] wing.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {/* Add your team members, story or mission here */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
          <p className="mt-4 text-gray-600">
            At [Your Store Name], we strive to provide our customers with the best online shopping experience possible.
            Our mission is to offer high-quality products at affordable prices, ensuring customer satisfaction every step of the way.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900">Our Team</h3>
          <p className="mt-4 text-gray-600">
            Our dedicated team works tirelessly to bring you a diverse selection of products. We believe in innovation, creativity, and customer-centric values.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900">Customer Commitment</h3>
          <p className="mt-4 text-gray-600">
            We are committed to providing excellent customer service. Whether you are making your first purchase or are a loyal customer, 
            your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-gray-900">Why Shop With Us?</h3>
        <p className="mt-4 text-lg text-gray-600">
          We offer a wide selection of [products] that you can't find anywhere else. Shop with confidence knowing you are getting quality items and top-notch service.
        </p>
      </div>
    </div>
        </>
  );
};

export default About;

