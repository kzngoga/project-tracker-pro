import AuthWrapper from "@/components/auth/auth-wrapper";
import SignupForm from "@/components/auth/signup-form";
import React from "react";

export default function SignupPage() {
  return (
    <AuthWrapper
      title="Create Account"
      switchPageAction={{
        disclaimer: "Already have an account?",
        text: "Login",
        href: "/login",
      }}
    >
      <SignupForm />
    </AuthWrapper>
  );
}
