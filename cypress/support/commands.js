// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- custom command to fill required fields --
Cypress.Commands.add("fillMandatoryFields", () => {
  const longText = Cypress._.repeat("abcdefgh ", 10);
  cy.get("#firstName").type("name");
  cy.get("#lastName").type("last");
  cy.get("#email").type("name_last@hmail.com");
  cy.get("#phone").type(5554443245);
  cy.get("#open-text-area").type(longText);
  cy.get('button[type="submit"]').click();
});
// -- This is a parent command --
//
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- custom command to fill required fields using parameters --
Cypress.Commands.add("fillMandatoryFieldsWithParam", (data) => {
  cy.get("#firstName").type(data.firstName);
  cy.get("#lastName").type(data.lastName);
  cy.get("#email").type(data.email);
  cy.get("#phone").type(data.phoneNo);
  cy.get("#open-text-area").type(data.text_area);
  cy.get('button[type="submit"]').click();
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
