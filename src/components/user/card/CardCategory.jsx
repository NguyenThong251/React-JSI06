import React from 'react';

export default function CardCategory({ image, title, quantity }) {
  return (
    <div className="card cursor-pointer group shadow-md hover:shadow-lg transition-all duration-300 rounded-lg bg-white overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-75 opacity-0 transition-opacity duration-300 rounded-t-lg"></div>
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col items-center">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <span className="text-gray-600 text-sm">({quantity} items)</span>
      </div>
    </div>
  );
}
