import { Button } from '@mantine/core'
import React from 'react'
import { TbHeart,TbShoppingCart  } from "react-icons/tb"; 
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../../store/cartStore';
export default function CardProduct({ id,name, price, image }) {
    const navigate = useNavigate();
    const addToCart = useCartStore((state) => state.addToCart); 
    const handleClick = () => {
     navigate(`/product/${id}`);
    };
  return (
    <div
    className="flex flex-col p-4 bg-white shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300"
    onClick={handleClick}
  >
    {/* Product Image */}
    <div className="relative group">
      <img
        src={image}
        alt={name}
        className="rounded-t-xl h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Ngăn chặn sự kiện click vào sản phẩm
              addToCart({ id, name, price, image }); // Thêm sản phẩm vào giỏ
            }}
            className="flex items-center gap-2 bg-orange-600 text-white py-2 px-4 rounded-full font-medium shadow-md hover:bg-orange-700"
          >
            <TbShoppingCart className="h-5 w-5" />
            <span>ADD TO CART</span>
          </button>
        </div>
    </div>

    {/* Product Info */}
    <div className="flex flex-col items-center mt-4">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <span className="text-lg font-medium text-gray-600 mt-1">${price}</span>
    </div>
  </div>
  )
}


