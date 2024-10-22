import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <>
      <nav className="h-[60px] w-full bg-gradient-to-r from-[#fcdd62] to-[#00ffa2] flex justify-center items-center px-5 overflow-hidden">
        <div className="container mx-auto flex justify-between items-center max-w-full">
          <Link to="/">
            <img className="w-[120px] h-[50px]" src="./public/logo.png" alt="logo" />
          </Link>

          <ul className="flex justify-center items-center gap-6 flex-wrap">
            <Link to="/" className="text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Home</Link>
            <Link to="/about/ship" className="text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Shipping</Link>
            <Link to="/about/contact" className="text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Contact</Link>
            <Link to="/about/help" className="text-2xl font-semibold text-[#222222] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">Help</Link>
          </ul>

          
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
