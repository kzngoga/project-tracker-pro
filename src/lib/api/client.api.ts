import { ApiClient, handleApiError } from "@/store/config";
import { useQuery } from "@tanstack/react-query";
import { Client } from "../database/models/client.model";

export const fetchClients = async (): Promise<Client> => {
  try {
    const response = await ApiClient.get<Client>("/clients/all");
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

// Hooks
export const useFetchClientsQuery = () => {
  return useQuery({
    queryKey: ['clients'],
    queryFn: fetchClients,
  });
};
