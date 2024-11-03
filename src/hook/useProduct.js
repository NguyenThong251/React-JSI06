import { useEffect, useState } from "react";
import apiClient from "../service/apiConfig";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await apiClient.get("/product"); // Gọi API lấy danh sách sản phẩm
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading };
}
