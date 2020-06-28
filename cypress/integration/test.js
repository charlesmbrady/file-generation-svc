/// <reference types="cypress" />
describe('Vist', () => {
  it('can visit page', () => {
    cy.visit(`${Cypress.config('baseUrl')}`);
  });
});
