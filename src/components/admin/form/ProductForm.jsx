import React, { useState, useEffect } from "react";
import { Button, TextInput, NumberInput } from "@mantine/core";

export default function ProductForm({ product, onSave }) {
  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? product.price : 0);
  const [image, setImage] = useState(product ? product.image : "");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, price, image });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <NumberInput
        label="Price"
        value={price}
        onChange={(value) => setPrice(value)}
        required
      />
      <TextInput
        label="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <Button type="submit" mt="md">
        {product ? "Update" : "Add"} Product
      </Button>
    </form>
  );
}
