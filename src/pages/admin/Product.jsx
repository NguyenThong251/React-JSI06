import React, { useState } from "react";
import { Table, Button, Dialog, Drawer, Title, Divider } from "@mantine/core";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { useProducts } from "../../hook/useProduct";
import ProductForm from "../../components/admin/form/ProductForm";

export default function ProductList() {
  const { products, loading, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editingProduct, setEditingProduct] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading products...</p>;

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
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <Title order={1} className="text-2xl font-bold text-gray-800">
          Product Management
        </Title>
        <p className="text-sm text-gray-600 mt-1">
          Manage your products, add new items, or update existing ones.
        </p>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-10 px-6">
        {/* Add Product Button */}
        <div className="flex justify-between items-center mb-6">
          <Title order={2} className="text-lg font-semibold text-gray-800">
            Product List
          </Title>
          <Button
            leftIcon={<FaPlus />}
            color="teal"
            size="md"
            className="bg-teal-500 hover:bg-teal-600"
            onClick={() => setDialogOpen(true)}
          >
            Add Product
          </Button>
        </div>

        {/* Product Table */}
        <Table highlightOnHover className="shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-600 font-semibold">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 object-cover rounded-md border"
                  />
                </td>
                <td className="text-gray-800 font-medium">{product.name}</td>
                <td className="text-gray-600">{product.price} VND</td>
                <td className="space-x-2">
                  <Button
                    variant="subtle"
                    color="blue"
                    size="xs"
                    leftIcon={<FaEdit />}
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="subtle"
                    color="red"
                    size="xs"
                    leftIcon={<FaTrash />}
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Dialog for Adding Product */}
      <Dialog
        opened={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        title={<h3 className="text-lg font-semibold">Add New Product</h3>}
        size="lg"
      >
        <Divider className="my-4" />
        <ProductForm onSave={handleAddProduct} />
      </Dialog>

      {/* Drawer for Editing Product */}
      <Drawer
        opened={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={<h3 className="text-lg font-semibold">Edit Product</h3>}
        padding="lg"
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
