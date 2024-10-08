import React from "react";

interface AuthWrapperProps {
  title: string;
  children: React.ReactNode;
}

export default function AuthWrapper({ title, children }: AuthWrapperProps) {
  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-center text-[28px] text-secondary font-bold mb-6">
        {title}
      </h3>
      {children}
    </div>
  );
}
