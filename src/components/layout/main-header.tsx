"use client";

import React from "react";
import Logo from "../utils/Logo";
import { LockKeyholeIcon, MenuIcon, UserPen } from "lucide-react";
import Pagetitle from "../utils/page-title";
import UserAvatar from "../utils/user-avatar";
import IconButton from "../utils/icon-button";
import Menu, { MenuItem } from "../utils/menu";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function MainHeader({
  title,
  setShowSidebar,
}: {
  title: string;
  setShowSidebar: () => void;
}) {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { title: "Edit profile", icon: <UserPen />, onClick: () => {} },
    { title: "Change password", icon: <LockKeyholeIcon />, onClick: () => {} },
  ];

  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/login");
  };

  return (
    <div className="h-14 fixed w-full flex gap-6 items-center shadow-[0_0_11px_rgba(0,0,0,0.13)]">
      <div className="w-60 bg-secondary-dark h-14 flex justify-between sm:justify-center p-2.5 items-center">
        <Logo textStyles="text-white" />
        <IconButton
          variant="ghost"
          className="block sm:hidden"
          onClick={setShowSidebar}
        >
          <MenuIcon className="text-white" />
        </IconButton>
      </div>

      {/* Page Title */}
      <div className="flex grow items-center justify-between pr-6">
        <Pagetitle title={title} />
        <Menu menuItems={menuItems} showLogout handleLogout={handleLogout}>
          <UserAvatar fullName="John Doe" />
        </Menu>
      </div>
    </div>
  );
}
