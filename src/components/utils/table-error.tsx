import React from "react";
import { TableCell, TableRow } from "../ui/table";

export default function TableError({
  colSpan,
  text = "Loading",
}: {
  colSpan: number;
  text?: string;
}) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-24 text-center">
        <span className="flex items-center justify-center gap-3 font-medium">
          {text}
        </span>
      </TableCell>
    </TableRow>
  );
}
