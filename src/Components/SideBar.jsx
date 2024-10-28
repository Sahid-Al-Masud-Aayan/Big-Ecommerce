import React from 'react';

const LaptopFilterSidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">Filter Laptops</h2>

      {/* Categories */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Categories</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Ultrabook</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Productivity</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Gaming</button>
      </div>

      {/* Brand */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Brand</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">HP</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Dell</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">ASUS</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Alienware</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Lenovo</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Gigabyte</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Razer</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Acer</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Microsoft</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">MSI</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Samsung</button>
      </div>

      {/* Processor Brand and Gen */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Processor Brand</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Intel</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">AMD</button>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Processor Type</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Core i5</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Core i7</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Core i9</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Ryzen 5</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Ryzen 7</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Ryzen 9</button>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Processor Generation</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">11th (Intel)</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">12th (Intel)</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">13th (Intel)</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">5th (Ryzen)</button>
      </div>

      {/* RAM Amount */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">RAM Amount</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">8GB</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">16GB</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">32GB</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">64GB</button>
      </div>

      {/* RAM Type */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">RAM Type</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">DDR4</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">LPDDR4</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">DDR5</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">LPDDR5</button>
      </div>

      {/* Storage */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Storage</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">256GB SSD</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">512GB SSD</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">1TB SSD</button>
      </div>

      {/* Display Size */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Display Size</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">13 inch</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">13.3 inch</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">14 inch</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">15.6 inch</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">16 inch</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">16.1 inch</button>
      </div>

      {/* Display Resolution */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Display Resolution</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">1920 x 1080</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">2560 x 1440</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">2560 x 1504</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">2560 x 1600</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">2880 x 1920</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">3840 x 2160</button>
      </div>

      {/* Touch or Non-Touch */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Touchscreen</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Touch</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">Non-Touch</button>
      </div>

      {/* Display Refresh Rate */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Display Refresh Rate</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">60Hz</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">120Hz</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">144Hz</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">165Hz</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">240Hz</button>
      </div>

      {/* Battery Backup */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 border-t-2">Battery Backup</h3>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">6 Hours</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">8 Hours</button>
        <button className="block text-gray-700 hover:text-blue-500 mb-1">10+ Hours</button>
      </div>
    </div>
  );
};

export default LaptopFilterSidebar;
