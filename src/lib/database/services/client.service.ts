import { Client, ClientInput } from "@/lib/database/models/client.model";

interface FindOne {
  _id?: string;
  user?: string;
}

class ClientService {
  static async createClient(newClient: ClientInput) {
    try {
      return await Client.create(newClient);
    } catch (error) {
      throw error;
    }
  }

  static async fetchClients() {
    try {
      return await Client.find();
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