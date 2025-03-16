import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-10">
      <Heading
        title="Admin Dashboard"
        description="Manage your store's products, categories, and more."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Products</h3>
          <p className="text-muted-foreground">Manage your store&apos;s products</p>
          <div className="mt-4">
            <Link href={"/admin/products"} className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              View Products
            </Link>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Categories</h3>
          <p className="text-muted-foreground">Manage product categories</p>
          <div className="mt-4">
            <Link href={"/admin/categories"} className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              View Categories
            </Link>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-2">Orders</h3>
          <p className="text-muted-foreground">View and manage orders</p>
          <div className="mt-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md">
              View Orders
            </button>
          </div>
        </Card>

      </div>
    </div>
  );
}