import String from "../../../shared/valueObjects/Strings";

export default class service {
    private _service: String;
    constructor(service) {
        this._service = new service();
    }

    public get service() {
        return this._service;
    }
}