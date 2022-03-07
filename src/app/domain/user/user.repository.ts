import User from "./user";

export default interface Iuser {
  Create(user: User): Promise<Boolean>;
  find(email: string): Promise<User>;
  findAll(): Promise<User[]>;
  update(emai,luser): Promise<User>;
  delete(email: string): Promise<Boolean>;


  verify(token): Promise<Boolean>;
  recoverPassword(user): Promise<Boolean>;
  confirmUser(): Promise<Boolean>;
}
