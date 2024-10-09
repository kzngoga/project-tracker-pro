/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format the mongodb response
 */
export function formatApiResponse(doc: any, ret: any) {
  ret.id = ret._id;
  ret.password = null;

  delete ret.__v;
  delete ret._id;
  delete ret.password;
}
