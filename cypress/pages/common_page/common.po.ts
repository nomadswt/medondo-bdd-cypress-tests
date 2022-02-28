/// <reference types="cypress" />

export class CommonPage {
    public overview: string = 'mdo-module-overview';

    public waitForDashboardPage() {
        cy.get(this.overview).should('be.visible');
    }
}
