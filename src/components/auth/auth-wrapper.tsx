import Link from "next/link";

import React from "react";

interface AuthWrapperProps {
  title: string;
  children: React.ReactNode;
  switchPageAction?: { disclaimer: string; text: string; href: string };
}

export default function AuthWrapper({
  title,
  children,
  switchPageAction,
}: AuthWrapperProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-center text-[28px] text-secondary font-bold mb-6">
        {title}
      </h3>
      {children}
      {switchPageAction && (
        <Link
          href={switchPageAction.href}
          className="mt-4 text-muted text-sm font-medium"
        >
          {switchPageAction.disclaimer}{" "}
          <span className="text-primary underline font-bold">
            {switchPageAction.text}
          </span>
        </Link>
      )}
    </div>
  );
}
