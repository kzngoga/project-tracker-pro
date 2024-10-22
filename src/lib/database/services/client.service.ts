import { Client, ClientInput } from "@/lib/database/models/client.model";

interface FindOne {
  _id?: string;
  user?: string;
  email?: string;
}

interface ClientFormData extends ClientInput {
  user: string;
}

class ClientService {
  static async createClient(newClient: ClientFormData) {
    try {
      return await Client.create(newClient);
    } catch (error) {
      throw error;
    }
  }

  static async fetchClients(clientId: string) {
    try {
      return await Client.find({ user: clientId }).populate("user");
    } catch (error) {
      throw error;
    }
  }

  static async findClient(params: FindOne) {
    try {
      return await Client.findOne(params);
    } catch (error) {
      throw error;
    }
  }

  static async updateClient(id: string, payload: Partial<ClientInput>) {
    try {
      return await Client.findOneAndUpdate({ _id: id }, payload, { new: true });
    } catch (error) {
      throw error;
    }
  }
}

export default ClientService;
