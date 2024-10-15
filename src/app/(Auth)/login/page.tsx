import AuthWrapper from "@/components/auth/auth-wrapper";
import LoginForm from "@/components/auth/login-form";

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
      <LoginForm />
    </AuthWrapper>
  );
}
