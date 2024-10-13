import React from 'react';
import useCartStore from '../../../store/cartStore';

export default function CardProduct({ image, name, price, id }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <div>
      <div>
        <img src={image} alt={name} className="h-56 w-full" />
        <div>{name}</div>
        <div>{price}</div>
        <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
