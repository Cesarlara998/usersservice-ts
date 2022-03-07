export default class Integer {
    public value: string
    constructor(value) {
        if (!value) {
            throw new Error('Integer is required')
        }
    }
}