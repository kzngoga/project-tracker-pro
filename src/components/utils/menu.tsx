"use client";

import React, { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import styles from "./menu.module.css";
import { LogOut } from "lucide-react";

export interface MenuItem {
  title: string;
  icon?: ReactNode;
  onClick: () => void;
}

interface MenuProps {
  children: ReactNode;
  showLogout?: boolean;
  handleLogout?: () => void;
  menuItems: MenuItem[];
}

export default function Menu({
  children,
  menuItems,
  showLogout = false,
  handleLogout,
}: MenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none cursor-pointer">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          "w-60 shadow-[0_2px_30px_6px_rgba(0,0,0,0.1)] rounded-md px-0 mr-8 mt-6 bg-white",
          styles["menu-content"]
        )}
      >
        {menuItems.map((menuItem) => (
          <DropdownMenuItem
            key={menuItem.title}
            className="py-2.5 px-5 hover:bg-muted-light text-[15px] cursor-pointer"
          >
            {menuItem.icon}
            {menuItem.title}
          </DropdownMenuItem>
        ))}
        {showLogout && handleLogout && (
          <>
            {menuItems.length > 0 && (
              <DropdownMenuSeparator className="bg-muted-light mx-3" />
            )}
            <DropdownMenuItem
              className="py-2.5 px-5 text-[15px] text-error font-medium cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut />
              Logout
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
