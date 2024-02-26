/// <reference types="Cypress" />
describe("Cypress Test 1 Spec", () => {
    it("passes", () => {
      cy.fixture("watchData")
      .its("data")
      .then(product => {
        product.forEach(element => {
          //cy.visit("https://demo.oscommerce.com/watch/");
          cy.visit("https://sqademosatp.net/watch");

          cy.selectProduct(element.product);
          cy.addToBasket();
          cy.setQuantity(element.quantity);
          cy.goToCart();
          cy.payWithCard();
          cy.setShoppingDetails();
        });
      });
    });
  });
