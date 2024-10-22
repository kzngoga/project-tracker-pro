"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { match } from "ts-pattern";
import TableLoader from "../utils/table-loader";
import TableError from "../utils/table-error";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  wrapperStyles?: string;
  title?: string;
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  searchPlaceholder?: string;
  onActionClick?: () => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  wrapperStyles = "",
  title,
  isLoading = false,
  hasError = false,
  errorMessage = "No Results.",
  searchPlaceholder = "Search...",
  onActionClick,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div
      className={cn(
        "flex flex-col rounded-md shadow-[0_1px_20px_0_rgba(69,90,100,0.08)] w-full p-6 gap-4",
        wrapperStyles
      )}
    >
      {title && (
        <h4 className="font-medium text-base text-secondary-gray">{title}</h4>
      )}

      {/* TABLE ACTIONS */}
      <div className="flex items-center justify-end gap-4">
        <Input
          className="form-control w-[300px]"
          placeholder={searchPlaceholder}
        />
        {onActionClick && (
          <Button onClick={onActionClick} className="gap-2">
            Add client
            <PlusCircle className="w-4" />
          </Button>
        )}
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {match({ isLoading, hasError })
            .with({ isLoading: true, hasError: false }, () => (
              <TableLoader colSpan={columns.length} />
            ))
            .with({ hasError: true, isLoading: false }, () => (
              <TableError colSpan={columns.length} text={errorMessage} />
            ))
            .otherwise(() => (
              <>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
