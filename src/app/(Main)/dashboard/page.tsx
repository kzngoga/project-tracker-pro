"use client";

import FormButton from "@/components/forms/form-button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/login");
  };

  return (
    <div>
      DashboardPage
      <FormButton onClick={handleLogout}>Logout</FormButton>
    </div>
  );
}
