/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from "@/lib/database/config";
import { ClientInput } from "@/lib/database/models/client.model";
import ClientService from "@/lib/database/services/client.service";
import { requestWithAuth } from "@/lib/helpers/auth";
import { response } from "@/lib/helpers/response";
import { AuthUser, ErrorTypes } from "@/types";
import { NextRequest } from "next/server";

export const POST = requestWithAuth(
  async (req: NextRequest, user: AuthUser) => {
    try {
      await dbConnect();

      const body: ClientInput = await req.json();

      const payload = {
        ...body,
        user: user.id,
      };

      const clientExists = await ClientService.findClient({
        email: payload.email,
      });

      if (clientExists) {
        return response(
          409,
          "Client is already registered",
          null,
          ErrorTypes.Conflict
        );
      }

      const newClient = await ClientService.createClient(payload);

      return response(201, "Client created", newClient);
    } catch (error: any) {
      if ((error?.message as string)?.toLowerCase().includes("validation")) {
        return response(422, error?.message, null, ErrorTypes.Validation);
      }

      return response(
        500,
        error?.message || "Unexpected error, please try again!",
        null,
        ErrorTypes.Server
      );
    }
  }
);
