import String from "../../../shared/valueObjects/Strings";
import role from "./role";
import service from "./service";

export default class system {
    private _dns: String;
    private _role: role;
    private _service: service[];
    constructor(dns,role,service?: service[]) {
        this._dns = new String(dns);
        this._role = new role();
        if (service) this._service = service;
    }

    public get dns() {
        return this._dns
    }

    public get role() {
        return this._role;
    }

    public get service() {
        return this._service;
    }
}