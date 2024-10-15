import { Session, User } from "next-auth";

export enum ErrorTypes {
  NotFound = "NOT_FOUND",
  Conflict = "CONFLICT_ERROR",
  Server = "SERVER_ERROR",
  Bad = "BAD_REQUEST",
  Validation = "VALIDATION_ERROR",
  Auth = "AUTHENTICATION_ERROR",
  Forbidden = "FORBIDDEN",
}

export interface AuthSession extends Session {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
}

export interface AuthUser extends User {
  id: string;
  name: string;
  email: string;
  phone: string;
}
