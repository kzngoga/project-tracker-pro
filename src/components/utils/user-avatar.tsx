import React from "react";
import UserInitials from "./user-initials";
import { ChevronDown } from "lucide-react";

interface UserAvatarProps {
  imageSrc?: string;
  fullName: string;
}

export default function UserAvatar({ imageSrc, fullName }: UserAvatarProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {imageSrc ? null : <UserInitials fullName={fullName} />}
      <p className="text-[15px]">{fullName}</p>

      <ChevronDown className="w-[12px] h-[12px]" />
    </div>
  );
}
