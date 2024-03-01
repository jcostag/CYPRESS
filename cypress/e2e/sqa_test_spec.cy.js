/// <reference types="Cypress" />

//const siteUrl = "https://demo.oscommerce.com/watch/";
const siteUrl = "https://sqademosatp.net/watch";
const messageSucceeded = "We've received your order";
const messageFailed = "We've received order";

describe("SQA Test 1 Spec", () => {
  it("Try to purchase", () => {
    cy.fixture("sqa_test1_products").its("products").then(products => {
      products.forEach(product => {
        cy.visit(siteUrl);
        cy.clearCookies();
        cy.sqa_addToBasket(product.product);
        cy.sqa_goToCart(product.quantity);
        cy.sqa_checkout();
        cy.sqa_payment(messageSucceeded);
      });
    });
  });
});

describe("SQA Test 2 Spec", () => {
  it("Try to purchase", () => {
    cy.fixture("sqa_test2_product").then(product => {
      cy.visit(siteUrl);
      cy.sqa_addToBasket(product.product);
      cy.sqa_goToCart(product.quantity);
      cy.sqa_checkout();
      cy.sqa_payment(messageFailed);
    });
  });
});
