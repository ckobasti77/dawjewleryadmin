"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type ProductColumn = {
  id: string;
  name: string;
  price: string;
  size: string;
  category: string;
  color: string;
  isFeatured: boolean;
  isArchived: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProductColumn>[] = [
  {
    accessorKey: "name",
    header: "Naziv",
  },
  {
    accessorKey: 'isArchived',
    header: 'Arhivirano'
  },
  {
    accessorKey: 'isFeatured',
    header: 'Preporučeno'
  },
  {
    accessorKey: 'price',
    header: 'Cena'
  },
  {
    accessorKey: 'category',
    header: 'Kategorija'
  },
  {
    accessorKey: 'size',
    header: 'Veličina'
  },
  {
    accessorKey: 'color',
    header: 'Boja',
    cell: ({ row }) => (
      <div className="flex items-center justify-between">
        {row.original.color}
        <div className="h-6 w-6 rounded-full bor" style={{ backgroundColor: row.original.color }}>

        </div>
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Datum",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
