import React from 'react'

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 py-16 px-8 lg:px-40 mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-8 rounded-xl bg-white shadow-lg p-8">
      {/* Text Content */}
      <div className="text-center lg:text-left flex-1">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Elevate Your Style with the Best Fashion Deals
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Experience premium quality fashion at unbeatable prices. Don't miss our exclusive summer sale!
        </p>
        <button className="bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md hover:bg-orange-700 transition-all">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="flex justify-center flex-1">
        <img
          className="w-80 h-auto object-contain rounded-lg shadow-lg"
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?crop=entropy&cs=tinysrgb&w=800&fit=max"
          alt="Fashion Sale"
        />
      </div>

      {/* Promo Section */}
      <div className="text-center lg:text-right flex-1">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Summer Sale Offer</h3>
        <p className="text-lg text-gray-600 mb-2">
          Use Promo Code: <span className="font-bold text-red-500">FASHION25</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Get an extra <span className="text-orange-600 font-bold">25% OFF</span> on all items.
        </p>
      </div>
    </div>
  </div>
  )
}
