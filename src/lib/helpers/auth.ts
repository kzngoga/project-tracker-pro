import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Adjust this import path as necessary
import { AuthUser, ErrorTypes } from "@/types";
import { response } from "./response";

type RouteHandler = (req: NextRequest, user: AuthUser) => Promise<NextResponse>;

export function requestWithAuth(handler: RouteHandler) {
  return async function (req: NextRequest): Promise<NextResponse> {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return response(
        401,
       "Unauthorized access to this request!",
        null,
        ErrorTypes.Auth
      );
    }

    return handler(req, session.user as AuthUser);
  };
}
