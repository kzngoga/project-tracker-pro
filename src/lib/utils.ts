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

/**
 * Extracts initials from a given name string.
 * @param name The full name string
 * @param maxInitials The maximum number of initials to return (default: 2)
 * @returns A string of initials
 */
export function getInitials(name: string, maxInitials: number = 2): string {
  const nameParts = name.trim().split(/\s+/);
  const initials = nameParts.map((part) => part[0]?.toUpperCase() || "");

  return initials.slice(0, maxInitials).join("");
}
