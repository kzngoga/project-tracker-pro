import { cn } from "@/lib/utils";
import React from "react";

interface PagetitleProps {
  title: string;
  wrapperClasses?: string;
}

export default function Pagetitle({ title, wrapperClasses }: PagetitleProps) {
  return <h4 className={cn("font-bold text-lg", wrapperClasses)}>{title}</h4>;
}
