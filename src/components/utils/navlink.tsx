"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  linkStyles?: string;
  activeLinkStyles?: string;
}

export default function NavLink({
  href,
  children,
  linkStyles,
  activeLinkStyles,
}: NavLinkProps) {
  const pathname = usePathname();

  const getActiveClass = () => {
    if (pathname.startsWith(href)) {
      return activeLinkStyles;
    }

    return "";
  };

  return (
    <Link
      href={href}
      className={cn(
        "text-link text-sm flex items-center gap-3 hover:text-white",
        linkStyles,
        getActiveClass()
      )}
    >
      {children}
    </Link>
  );
}
