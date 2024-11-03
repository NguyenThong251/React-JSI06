import React, { useEffect, useState } from 'react'
import apiClient from '../../service/apiConfig';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    
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
  
    if (!product) return <div>Loading...</div>;
  
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="my-5 w-1/2" />
      <p className="text-xl">{product.price} $</p>
      <p className="mt-5">{product.description}</p>
    </div>
  )
}
