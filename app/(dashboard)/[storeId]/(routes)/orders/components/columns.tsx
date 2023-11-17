"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrderColumn = {
  id: string
  phone: string
  address: string
  isPaid: boolean
  totalPrice: string
  products: string
  createdAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Proizvodi",
  },
  {
    accessorKey: "phone",
    header: "Telefon",
  },
  {
    accessorKey: "address",
    header: "Adresa",
  },
  {
    accessorKey: "totalPrice",
    header: "Ukupna cena",
  },
  {
    accessorKey: "isPaid",
    header: "Plaćeno",
  },
]
