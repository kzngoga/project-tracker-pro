import AuthWrapper from "@/components/auth/auth-wrapper";
import { HomeIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <AuthWrapper
      title="Sign In"
      switchPageAction={{
        disclaimer: "Not having an account?",
        text: "Sign up",
        href: "/signup",
      }}
    >
      Login
    </AuthWrapper>
  );
}
