/* eslint-disable @typescript-eslint/no-explicit-any */
import dbConnect from "@/lib/database/config";
import { UserInput } from "@/lib/database/models/user.models";
import UserService from "@/lib/database/services/user.service";
import { hashPassword } from "@/lib/helpers/password";
import { response } from "@/lib/helpers/response";
import { ErrorTypes } from "@/types";
import { NextRequest } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body: UserInput = await req.json();

    const { email, password } = body;

    const userExists = await UserService.findUser({ email });

    if (userExists)
      return response(
        409,
        "User with this email already exists",
        null,
        ErrorTypes.Conflict
      );

    const hashedPassword = await hashPassword(password);
    const payload: UserInput = {
      ...body,
      password: hashedPassword,
    };

    const newUser = await UserService.createUser(payload);

    return response(201, "Sign up successful!", {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      phone: newUser.phone,
    });
  } catch (error: any) {
    return response(
      500,
      error?.message || "Unexpected error, please try again!",
      null,
      ErrorTypes.Server
    );
  }
}
