import React from 'react';

export default function CardCategory({ image, title, quantity }) {
  return (
    <div className="card cursor-pointer group">
      <div className="bg-pink-100 group-hover:bg-orange-100 hover:transition-all transition-all hover:duration-300 duration-300 flex justify-center rounded-full">
        <img src={image} alt={title} />
      </div>
      <div className="flex justify-center mt-5 flex-col items-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <span className="font-bold text-xl">({quantity})</span>
      </div>
    </div>
  );
}
