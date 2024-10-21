/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from "@/lib/database/config";
import ClientService from "@/lib/database/services/client.service";
import { response } from "@/lib/helpers/response";
import { AuthUser, ErrorTypes } from "@/types";
import { NextRequest } from "next/server";
import { requestWithAuth } from "@/lib/helpers/auth";

export const GET = requestWithAuth(async (_req: NextRequest, user: AuthUser) => {
  try {
    await dbConnect();

    console.log('LOG', user);
    
    const clients = await ClientService.fetchClients();

    if (!clients.length) {
      return response(404, "No clients found", null, ErrorTypes.NotFound);
    }

    return response(200, "My clients", clients);
  } catch (error: any) {
    return response(
      500,
      error?.message || "Unexpected error, please try again!",
      null,
      ErrorTypes.Server
    );
  }
});
