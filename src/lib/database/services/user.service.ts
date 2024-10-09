import { User, UserInput } from "@/lib/database/models/user.models";

interface FindOne {
  _id?: string;
  email?: string;
}

class UserService {
  static async createUser(newUser: UserInput) {
    try {
      return await User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async findUser(params: FindOne) {
    try {
      return await User.findOne(params);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id: string, payload: Partial<UserInput>) {
    try {
      return await User.findOneAndUpdate({ _id: id }, payload, { new: true });
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
