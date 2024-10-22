import { ContactIcon, FolderKanbanIcon, HomeIcon } from "lucide-react";
import React from "react";
import NavLink from "../utils/navlink";

export interface SidebarItem {
  title: string;
  icon?: React.ReactNode;
  href: string;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: <HomeIcon className="w-4 text-link-icon" />,
    href: "/dashboard",
  },
  {
    title: "My Clients",
    icon: <ContactIcon className="w-4 text-link-icon" />,
    href: "/dashboard/clients",
  },
  {
    title: "My Projects",
    icon: <FolderKanbanIcon className="w-4 text-link-icon" />,
    href: "/dashboard/projects",
  },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-secondary-dark w-60 pt-6">
      <ul className="flex flex-col">
        {SIDEBAR_ITEMS.map((item) => (
          <li key={item.title}>
            <NavLink
              href={item.href}
              linkStyles="py-2 px-4 border-l-solid border-l-[3px] border-l-transparent"
              activeLinkStyles="border-l-warning"
            >
              {item.icon}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
