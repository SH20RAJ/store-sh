"use client";

import { useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { columns } from "./columns";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between">
        <Heading
          title="Categories Management"
          description="Manage your store's categories"
        />
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>
      <div className="mt-8">
        <DataTable
          columns={columns}
          data={categories}
          searchKey="name"
          placeholder="Search categories..."
        />
      </div>
    </div>
  );
}