import React from 'react';
import useCartStore from '../../../store/cartStore'; // Import store

export default function CardProduct({ image, name, price }) {
  const addToCart = useCartStore((state) => state.addToCart); // Lấy hàm addToCart từ store

  const handleAddToCart = () => {
    addToCart({ image, name, price }); // Gọi hàm addToCart khi nhấn nút
  };

  return (
    <div>
      <div className=""><img src={image} alt="" className='h-56 w-full' />
        <div className="">{name}</div>
        <div className="">{price}</div>
        <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 mt-2">Add to Cart</button> {/* Nút thêm vào giỏ hàng */}
      </div>
    </div>
  );
}
