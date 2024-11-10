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
  const addProduct = async (product) => {
    try {
      const response = await apiClient.post("/product", product);
      setProducts((prevProducts) => [...prevProducts, response.data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await apiClient.put(`/product/${id}`, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await apiClient.delete(`/product/${id}`);
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
    
  }, []);

  return { products, loading ,addProduct,
    updateProduct,
    deleteProduct};
}
