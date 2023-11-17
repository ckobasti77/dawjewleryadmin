"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./cell-action"

export type CategoryColumn = {
  id: string
  name: string
  billboardLabel: string
  createdAt: string
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "name",
    header: "Naziv",
  },
  {
    accessorKey: "billboard",
    header: "Kolekcija",
    cell: ({ row }) => row.original.billboardLabel
  },
  {
    accessorKey: "CreatedAt",
    header: "Datum",
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
