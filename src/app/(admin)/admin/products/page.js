"use client";

import { useEffect, useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { ProductForm } from "./components/product-form";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/admin/products");
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        } else {
          console.error("Failed to fetch products:", data.error);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setIsAddModalOpen(true);
  };

  const handleSubmit = async (data) => {
    try {
      const response = await fetch("/api/admin/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      const newProduct = await response.json();
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between">
        <Heading
          title="Products Management"
          description="Manage your store's products"
        />
        <Button onClick={handleAddProduct}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>
      <div className="mt-8">
        <DataTable
          columns={columns}
          data={products}
          searchKey="name"
          placeholder="Search products..."
          loading={loading}
        />
      </div>
      <ProductForm
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}