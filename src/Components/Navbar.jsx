import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="h-[60px] w-full bg-gradient-to-r from-[#FCFB62] to-[#91F9E5] flex justify-center items-center px-5 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center max-w-full">
          <Link to="/">
            <img className="w-[160px] h-[50px]" src="./public/logo.png" alt="logo" />
          </Link>

          <ul className="flex justify-center items-center gap-6 flex-wrap">
            <Link to="/" className="text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Home</Link>
            <Link to="/services" className="text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Services</Link>
            <Link to="/products" className="text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Products</Link>
            <Link to="/about" className="text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">About</Link>
          </ul>

          <div className="flex space-x-4">
            <Link to="/register">
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition">Register</button>
            </Link>
            <Link to="/login">
              <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition">Login</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
