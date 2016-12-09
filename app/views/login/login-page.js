"use strict";
var observable_1 = require("data/observable");
var frameModule = require("ui/frame");
var email_1 = require("../../models/email");
var password_1 = require("../../models/password");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new observable_1.Observable({
        email: '',
        password: ''
    });
    var toggle = {
        "emailIsValid": false,
        "passwordIsStrong": false
    };
    var loginButton = page.getViewById('loginButton');
    // REMOVE: When finished Developing
    loginButton.isEnabled = true;
    page.bindingContext.on(observable_1.Observable.propertyChangeEvent, function (propertyChangeData) {
        /// Uncomment function below for testing
        // console.log(propertyChangeData.propertyName + " has been changed and the new value is: " + propertyChangeData.value);
        /// Email Validation
        if (propertyChangeData.propertyName === 'email') {
            if (new email_1.Email(page.bindingContext.email).isValid()) {
                toggle.emailIsValid = true;
            }
            else {
                toggle.emailIsValid = false;
            }
        }
        /// Password *Strength* check
        if (propertyChangeData.propertyName === 'password') {
            if (new password_1.Password(page.bindingContext.password).isStrongEnough()) {
                toggle.passwordIsStrong = true;
            }
            else {
                toggle.passwordIsStrong = false;
            }
        }
        /// If all input data is valid, enable Login button
        if (toggle.emailIsValid && toggle.passwordIsStrong) {
            loginButton.isEnabled = true;
        }
        else {
            loginButton.isEnabled = false;
        }
    });
}
exports.pageLoaded = pageLoaded;
function logIn() {
    frameModule.topmost().navigate({
        moduleName: 'views/main/main-page',
        clearHistory: true
    });
}
exports.logIn = logIn;
//# sourceMappingURL=login-page.js.map