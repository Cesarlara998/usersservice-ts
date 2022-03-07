export default class Email {
    public value: string
    constructor(value) {
        this.value = value
        if (!value) {
            throw new Error('Email is required')
        }
        if (!this.regex()) {
            throw new Error('Email is invalid')
        }
    }

    private regex() {
        const reg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        return reg.test(this.value)
    }
}