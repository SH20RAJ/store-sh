"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function DataTableToolbar({ table, searchKey, placeholder }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <div className="relative w-full md:w-[300px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={placeholder || "Search..."}
            value={(table.getColumn(searchKey)?.getFilterValue()) ?? ""}
            onChange={(event) =>
              table.getColumn(searchKey)?.setFilterValue(event.target.value)
            }
            className="pl-8"
          />
        </div>
      </div>
    </div>
  );
}