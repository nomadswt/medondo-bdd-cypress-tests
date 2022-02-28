import { Given, When } from "cypress-cucumber-preprocessor/steps";

import { LoginPage } from '../../pages/login_page/login.po';

const loginPage: LoginPage = new LoginPage();

Given(/^I open login page$/, () => {
    loginPage.openLoginPage();
    console.log('Hello World');
});

When(/^I login as (.*) user$/, (user) => {
    let username, password;
    switch (user) {
        case 'admin':
            username = 'admin';
            password = 'test@gmail.com';
            break;
        case 'sysadmin':
            username = 'medondo-sysadmin';
            password = 'E7:rCv@CR.U9Yr^X';
            break;
    }
    loginPage.fillUserCredentials(username, password);
    console.log('Hello World');
});

