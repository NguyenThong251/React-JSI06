import React, { useState } from "react";
import { Table, Button, Dialog, Drawer } from "@mantine/core";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useProducts } from "../../hook/useProduct";
import ProductForm from "../../components/admin/form/ProductForm";

export default function ProductList() {
  const { products, loading, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  if (loading) return <p>Loading products...</p>;

  const handleAddProduct = (product) => {
    addProduct(product);
    setDialogOpen(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setDrawerOpen(true);
  };

  const handleUpdateProduct = (id, product) => {
    updateProduct(id, product);
    setDrawerOpen(false);
  };

  return (
    <div>
      <h1>Product List</h1>
      <Button leftIcon={<FaPlus />} onClick={() => setDialogOpen(true)}>
        Add Product
      </Button>
      
      {/* Bảng hiển thị sản phẩm */}
      <Table highlightOnHover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt={product.name} width="150" /></td>
              <td>{product.name}</td>
              <td>{product.price} VND</td>
              <td>
                <Button variant="subtle" onClick={() => handleEditProduct(product)}><FaEdit /> Edit</Button>
                <Button variant="subtle" color="red" onClick={() => deleteProduct(product.id)}><FaTrash /> Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Dialog thêm sản phẩm */}
      <Dialog
        opened={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Add New Product"
      >
        <ProductForm onSave={handleAddProduct} />
      </Dialog>

      {/* Drawer chỉnh sửa sản phẩm */}
      <Drawer
        opened={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Edit Product"
        padding="md"
        size="lg"
      >
        {editingProduct && (
          <ProductForm
            product={editingProduct}
            onSave={(updatedProduct) => handleUpdateProduct(editingProduct.id, updatedProduct)}
          />
        )}
      </Drawer>
    </div>
  );
}
