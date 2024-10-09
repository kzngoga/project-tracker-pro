import React from "react";

export default function FieldError({
  message,
  children,
}: {
  message?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      {children}
      {message && <p className="text-error font-bold text-xs">{message}</p>}
    </div>
  );
}
