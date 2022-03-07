import User from "../domain/user/user";
import Iuser from "../domain/user/user.repository";
export default class UserApplication {
  private userRepository: Iuser;
  constructor(UserRepository: Iuser) {
    this.userRepository = UserRepository;
  }

  async create(email: string, password: string) {
    try {
      const user = new User(email, password);
      return this.userRepository.Create(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async findbyEmail(email: string) {
    try {
      return this.userRepository.find(email);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll() {
    try {
      return this.userRepository.findAll();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async update(email: string, password: string) {
    try {
      const user = new User(email, password);
      return this.userRepository.update(email, user);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(email: string) {
    try {
      return this.userRepository.delete(email);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
