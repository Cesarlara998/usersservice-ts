import Email from "../../../shared/valueObjects/Email";
import Password from "../../../shared/valueObjects/password";
import system from "./system";

export default class User {
  private _email: Email;
  private _password: Password;
  private _system?: system[];
  constructor(email: string, password: string, system?: system[]) {
    this._email = new Email(email);
    this._password = new Password(password);
    if (system) this._system = system;
  }

  public get email() {
    return this._email;
  }

  public get password() {
    return this._password;
  }

  public get systems() {
    return this._system;
  }
}
