import React, { useEffect, useState } from "react";
import apiClient from "../../service/apiConfig";
import { useParams } from "react-router-dom";
import useCartStore from "../../store/cartStore"; // Import store Zustand
import Swal from "sweetalert2";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const addToCart = useCartStore((state) => state.addToCart); // Lấy hàm addToCart từ store

  const fetchProductID = async () => {
    try {
      const response = await apiClient.get(`/product?id=${id}`);
      setProduct(response.data[0]);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductID();
  }, [id]);

  if (!product) return <div className="text-center mt-10 text-gray-500">Loading...</div>;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    Swal.fire({
      icon: "success",
      title: "Thành công!",
      text: "Sản phẩm đã được thêm vào giỏ hàng.",
      confirmButtonText: "OK",
      confirmButtonColor: "#4F46E5", // Màu xanh chủ đạo
    }); // Thông báo thêm sản phẩm
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-2xl font-semibold text-indigo-600 mt-4">{product.price} $</p>
          <p className="text-gray-600 mt-6 leading-relaxed">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-8 bg-indigo-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md hover:bg-indigo-500 transition duration-300"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
}
