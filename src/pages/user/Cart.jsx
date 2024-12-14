import React from "react";
import useCartStore from "../../store/cartStore";
import Swal from "sweetalert2";
import apiClient from "../../service/apiConfig";

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
    useCartStore();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleCheckout = async () => {
    if (cart.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Giỏ hàng trống!",
        text: "Hãy thêm sản phẩm vào giỏ trước khi thanh toán.",
      });
      return;
    }

    try {
      const orderData = {
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        total: calculateTotal(),
        createdAt: new Date().toISOString(),
      };

      await apiClient.post("/orders", orderData); // Gửi dữ liệu đơn hàng tới API

      Swal.fire({
        icon: "success",
        title: "Đặt hàng thành công!",
        text: "Đơn hàng của bạn đã được xử lý.",
      });

      clearCart(); // Xóa giỏ hàng sau khi thanh toán
    } catch (error) {
      console.error("Error creating order:", error);
      Swal.fire({
        icon: "error",
        title: "Thanh toán thất bại!",
        text: "Đã xảy ra lỗi trong quá trình xử lý đơn hàng.",
      });
    }
  };
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 mt-40">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Giỏ Hàng</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2 space-y-6">
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded-lg border border-gray-200"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">
                        {item.price} $ x {item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    >
                      -
                    </button>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-400"
                    >
                      Xóa
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={clearCart}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-400"
            >
              Xóa tất cả
            </button>
          </div>

          {/* Summary Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Tổng cộng</h2>
            <p className="text-lg font-medium text-gray-700 mb-4">
              Tổng số sản phẩm:{" "}
              <span className="font-semibold">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            </p>
            <p className="text-lg font-medium text-gray-700 mb-6">
              Thành tiền:{" "}
              <span className="text-xl font-bold text-gray-900">{calculateTotal()} $</span>
            </p>
            <button
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-500"
              onClick={handleCheckout}
            >
              Tiến hành thanh toán
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
