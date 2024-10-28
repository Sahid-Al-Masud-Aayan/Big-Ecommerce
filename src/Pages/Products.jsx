import React from 'react'
import LaptopFilterSidebar from '../Components/SideBar'

const Products = () => {
  return (
    <>
    <div className="flex">
      <div className=" sticky">
    <LaptopFilterSidebar/>

      </div>
    <div className="w-full min-h-screen bg-slate-300 ">
        <div className="flex justify-center items-center gap-5 flex-wrap pt-10 flex-gap-5">
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 duration-300">
      {/* Image Section */}
      <div className="p-4">
        <img
          src="https://www.asus.com/media/global/gallery/1qq8vmq0mcqfgefj_setting_xxx_0_90_end_2000.png"
          alt="Laptop"
          className="w-full h-[300px]"
          />
      </div>

      {/* Product Information */}
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-gray-800">
        Asus VivoBook 15
        </h2>
        <ul className="text-gray-700 text-sm space-y-1">
          <li>Processor Type. - Core i3</li>
          <li>Generation - 12th (Intel)</li>
          <li>RAM - 8GB</li>
          <li>Storage - 512GB SSD</li>
          <li>Display Size (Inch) - 15.6</li>
        </ul>
      </div>

      {/* Price and Cart Button */}
      <div className="px-4 py-3 flex justify-between items-center border-t gap-5">
        <p className="text-lg font-bold text-gray-900">
          Tk 57,800
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>




        </div>
          </div>
    </div>
    </>
  )
}

export default Products
