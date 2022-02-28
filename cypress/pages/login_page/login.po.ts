/// <reference types="cypress" />

export class LoginPage {
    public fieldUserName: string = '[data-testid="inputUsername"]';
    public fieldUserPassword: string = '[type="password"]';
    public btnLogin: string = '[data-testid="btnLogin"]';

    public openLoginPage() {
        cy.visit("/");
    }

    public fillUserCredentials(username: string, password: string): void {
        cy.get(this.fieldUserName).type(username);
        cy.get(this.fieldUserPassword).type(password);
        cy.get(this.btnLogin).click();
    }
}
