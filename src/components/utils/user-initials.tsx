import { cn, getInitials } from "@/lib/utils";
import React from "react";

interface UserInitialsProps {
  fullName: string;
  maxInitials?: number;
  classes?: {
    wrapper?: string;
    text?: string;
  };
}

export default function UserInitials({
  fullName,
  maxInitials,
  classes,
}: UserInitialsProps) {
  return (
    <div
      className={cn(
        "bg-muted flex items-center justify-center h-10 w-10 rounded-full",
        classes?.wrapper
      )}
    >
      <span className={cn("text-sm text-white font-bold", classes?.text)}>
        {getInitials(fullName, maxInitials)}
      </span>
    </div>
  );
}
