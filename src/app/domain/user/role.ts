import Integer from "../../../shared/valueObjects/integer";
import String from "../../../shared/valueObjects/Strings";

export default class role {
    private _nameRole: String;
    private _positionRole: Integer;

    constructor(name, position) {
        this._nameRole = new String(name);
        this._positionRole = new String(position)
    }

    public get nameRole() {
        return this._nameRole;
    }

    public get positionRole() {
        return this._positionRole;
    }
}