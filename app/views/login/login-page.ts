import { Observable } from 'data/observable';

import { Page } from 'ui/page';
import { Button } from 'ui/button';

import { Email } from '../../models/email';
import { Password } from '../../models/password';


export function pageLoaded(args) {
    let page = <Page>args.object;

    page.bindingContext = new Observable({
        email: '',
        password: ''
    });

    let toggle = {
        "emailIsValid": false,
        "passwordIsStrong": false
    };

    let loginButton = <Button>page.getViewById('loginButton');

    page.bindingContext.on(Observable.propertyChangeEvent, function (propertyChangeData) {
        /// Uncomment function below for testing
        // console.log(propertyChangeData.propertyName + " has been changed and the new value is: " + propertyChangeData.value);

        /// Email Validation
        if (propertyChangeData.propertyName === 'email') {
            if (new Email(page.bindingContext.email).isValid()) {
                toggle.emailIsValid = true;
            } else {
                toggle.emailIsValid = false;
            }
        }

        /// Password *Strength* check
        if (propertyChangeData.propertyName === 'password') {
            if (new Password(page.bindingContext.password).isStrongEnough()) {
                toggle.passwordIsStrong = true;
            } else {
                toggle.passwordIsStrong = false;
            }
        }

        /// If all input data is valid, enable Login button
        if (toggle.emailIsValid && toggle.passwordIsStrong) {
            loginButton.isEnabled = true;
        } else {
            loginButton.isEnabled = false;
        }
    });
}

