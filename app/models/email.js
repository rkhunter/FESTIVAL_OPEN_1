"use strict";
var Email = (function () {
    function Email(email) {
        this.filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.regexp = new RegExp(this.filter);
        this.email = email;
    }
    Email.prototype.isValid = function () {
        return this.regexp.test(this.email);
    };
    return Email;
}());
exports.Email = Email;
//# sourceMappingURL=email.js.map