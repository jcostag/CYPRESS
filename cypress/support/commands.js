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
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
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

Cypress.Commands.add("selectProduct", (product) => {
    cy.get("a").contains(product).click();
 });

 Cypress.Commands.add("addToBasket", () => {
    //cy.log(cy.get("#btn-cart").children(".add-to-cart"));


    //cy.get(".popup-box-wrap").should("be.visible");
    //cy.get("#product-form").submit();
    //cy.get("#btn-cart").children(".add-to-cart").click();
    //cy.wait(10000);


    cy.get(".customers-activity").children(".close").click();
    cy.get("#btn-cart").children(".add-to-cart").click();


    //cy.get("#btn-cart").children(".add-to-cart").click({ force: true });
    //cy.get("#product-form").submit();
    //cy.get('#btn-cart > .add-to-cart').click();
    //cy.get('#box-2082 > :nth-child(1)').click();
 });