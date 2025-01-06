"use client";

import { ColumnDef } from "@tanstack/react-table";

export type PageView = {
  id: string;
  timestamp: string;
  ip: string;
  user_agent: string;
  page_url: string;
};

export const columns: ColumnDef<PageView>[] = [
  {
    accessorKey: "timestamp",
    header: "Date et heure",
    cell: ({ row }) => {
      const date = new Date(row.getValue("timestamp"));
      return date.toLocaleString("fr-FR");
    },
  },
  {
    accessorKey: "ip",
    header: "Adresse IP",
  },
  {
    accessorKey: "user_agent",
    header: "User Agent",
  },
  {
    accessorKey: "page_url",
    header: "Page consultée",
  },
];