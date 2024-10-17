import MainHeader from "@/components/layout/main-header";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex flex-col">
      <MainHeader />
      {children}
    </div>
  );
}
