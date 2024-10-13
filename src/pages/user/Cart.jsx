import React from 'react';
import useCartStore from '../../store/cartStore';

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCartStore();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Giỏ Hàng</h1>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b py-2">
                <div>
                  <img src={item.image} alt={item.name} className="h-16 w-16" />
                  <span>{item.name}</span> - <span>{item.price} x {item.quantity}</span>
                </div>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)} className="px-2">-</button>
                  <button onClick={() => increaseQuantity(item.id)} className="px-2">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Xóa</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={clearCart} className="mt-4 bg-red-500 text-white p-2">Xóa tất cả</button>
        </div>
      )}
    </div>
  );
}
