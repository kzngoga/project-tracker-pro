import AuthWrapper from "@/components/auth/auth-wrapper";
import LoginForm from "@/components/auth/login-form";
import React from "react";

export default function SignupPage() {
  return (
    <AuthWrapper title="Create Account">
      <LoginForm />
    </AuthWrapper>
  );
}
