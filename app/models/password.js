"use strict";
var Password = (function () {
    function Password(password) {
        /**
         * (?=.*[A-Z].*[A-Z])           Ensure has two uppercase letters.
         * (?=.*[!@#$&_\-*])            Ensure has one special case letter.
         * (?=.*[0-9].*[0-9])           Ensure has two digits.
         * (?=.*[a-z].*[a-z].*[a-z])    Ensure has three lowercase letters.
         * .{8,}                        Ensure length >= 8
         */
        this.filter = /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&_\-*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}/;
        this.regexp = new RegExp(this.filter);
        this.password = password;
    }
    Password.prototype.isStrongEnough = function () {
        return this.regexp.test(this.password);
    };
    return Password;
}());
exports.Password = Password;
//# sourceMappingURL=password.js.map