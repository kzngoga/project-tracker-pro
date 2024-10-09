import axios, { AxiosError } from "axios";

export const ApiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// Helper function to handle errors
export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    return {
      message: error.response?.data?.message || error.message,
      code: error.code,
      status: error.response?.status,
    };
  }
  return { message: "An unexpected error occurred" };
};

// API Hook parameters
export interface APIHookParams {
  onErrorHandler?: (err: Error) => void;
  onSuccessHandler?: () => void;
}
