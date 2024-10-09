/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorTypes } from "@/types";
import { NextResponse } from "next/server";

export function response(
  status: number,
  message: string,
  data: any,
  error?: ErrorTypes
) {
  const jsonRes = error
    ? { status, message, error }
    : { status, message, data };

  return NextResponse.json(jsonRes, { status });
}
