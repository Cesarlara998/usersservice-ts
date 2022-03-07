export default class Password {
    public value: string
    constructor(value) {
        if (!value) {
            throw new Error('Password is required')
        }
    }
}