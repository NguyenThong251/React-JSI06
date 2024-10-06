import React, { useEffect } from 'react';
import useCartStore from '../../store/cartStore';

export default function Cart() {
    const { cart, removeFromCart, clearCart, getCart } = useCartStore((state) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        clearCart: state.clearCart,
        getCart: state.getCart,
    }));

    // Log the cart state to ensure correct behavior
    console.log(cart);

    // Ensure useEffect runs only on mount to avoid multiple re-renders
    useEffect(() => {
        getCart(); // Get cart on component mount
    }, [getCart]); // Dependency is stable since Zustand stores are memoized

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
                                    <span>{item.name}</span> - <span>{item.price}</span>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Xóa</button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={clearCart} className="mt-4 bg-red-500 text-white p-2">Xóa tất cả</button>
                </div>
            )}
        </div>
    );
}
