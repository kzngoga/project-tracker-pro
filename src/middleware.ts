import { NextResponse } from "next/server";
import { withAuth, NextRequestWithAuth } from "next-auth/middleware";

const authPages = ["/login", "/forgot-password", "/signup"];

export default withAuth(function middleware(req: NextRequestWithAuth) {
  // Check if auth is present for protected routes
  if (!req.nextauth.token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.rewrite(url);
  } else if (
    req.nextauth.token &&
    authPages.some((page) => req.nextUrl.pathname.startsWith(page))
  ) {
    // Check if auth is present for unprotected routes
    const url = req.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/forgot-password", "/signup"],
};
