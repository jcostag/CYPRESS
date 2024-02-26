/// <reference types="Cypress" />
describe("Cypress Test 1 Spec", () => {
    it("passes", () => {
      //cy.visit("https://demo.oscommerce.com/watch/");
      cy.visit("https://sqademosatp.net/watch");

      cy.selectProduct("Royal London 41003-03");
      cy.addToBasket();

    });
  });