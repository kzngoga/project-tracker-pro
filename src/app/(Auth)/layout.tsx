import Logo from "@/components/utils/Logo";
import React from "react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Redirect to dashboard when auth is valid
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full min-[480px]:w-[450px] flex flex-col gap-8 items-center bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] py-6 px-5 rounded-lg">
        {children}
        <div className="bg-black/10 h-[1px] w-full"></div>
        <Logo />
      </div>
    </div>
  );
}
