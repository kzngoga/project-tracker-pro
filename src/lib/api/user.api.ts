import { ApiClient, APIHookParams, handleApiError } from "@/store/config";
import { User } from "next-auth";
import { UserInput } from "../database/models/user.models";
import { useMutation } from "@tanstack/react-query";

export const signUp = async (data: UserInput): Promise<User> => {
  try {
    const response = await ApiClient.post<User>("/auth/signup", data);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Hooks
export const useSignupMutation = ({
  onErrorHandler,
  onSuccessHandler,
}: APIHookParams) => {
  return useMutation({
    mutationFn: signUp,
    onError: (err) => {
      if (onErrorHandler) {
        onErrorHandler(err);
      }
    },
    onSuccess: () => {
      if (onSuccessHandler) {
        onSuccessHandler();
      }
    },
  });
};
