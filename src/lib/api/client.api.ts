import { ApiClient, ApiResponse, handleApiError } from "@/store/config";
import { useQuery } from "@tanstack/react-query";
import { ClientItem } from "../database/models/client.model";

export const fetchClients = async (): Promise<ClientItem[]> => {
  try {
    const response = await ApiClient.get<ApiResponse>("/clients/all");
    return response.data?.data as ClientItem[];
  } catch (error) {
    throw handleApiError(error);
  }
};

// Hooks
export const useFetchClientsQuery = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: fetchClients,
  });
};
