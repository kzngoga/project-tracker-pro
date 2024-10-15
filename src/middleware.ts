import { NextResponse } from "next/server";
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // Check if auth is present for protected routes
    if (!req.nextauth.token) {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  },
  {
    callbacks: {},
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
