Cypress.Commands.add("selectProduct", (product) => {
    cy.get("a").contains(product).click();
 });

 Cypress.Commands.add("addToBasket", () => {
    cy.get(".customers-activity").children(".close").click();
    cy.get("#btn-cart").children(".add-to-cart").click();
});

Cypress.Commands.add("setQuantity", (quantity) => {
   cy.get(".popup-box-wrap .qty-inp-s")
     .click()
     .clear()
     .type(quantity);
   
   cy.wait(2000);
});

Cypress.Commands.add("goToCart", () => {
   cy.get(".popup-box-wrap .right-buttons > .btn-2")
     .click();
});

Cypress.Commands.add("payWithCard", () => {
   cy.get(".cart-checkout-buttons .with-card")
     .click();
});

Cypress.Commands.add("setShoppingDetails", () => {
   cy.log("abc");
});
