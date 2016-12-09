export class Password {
    private password: string;

    /**
     * (?=.*[A-Z].*[A-Z])           Ensure has two uppercase letters.
     * (?=.*[!@#$&_\-*])            Ensure has one special case letter.
     * (?=.*[0-9].*[0-9])           Ensure has two digits.
     * (?=.*[a-z].*[a-z].*[a-z])    Ensure has three lowercase letters.
     * .{8,}                        Ensure length >= 8
     */
    private filter = /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&_\-*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}/;
    private regexp = new RegExp(this.filter);

    constructor(password: string) {
        this.password = password;
    }
    public isStrongEnough() {
        return this.regexp.test(this.password);
    }
}