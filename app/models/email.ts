export class Email {
    private email: string;
    private filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private regexp = new RegExp(this.filter);

    constructor(email: string) {
        this.email = email;
    }
    public isValid() {
        return this.regexp.test(this.email);
    }
}