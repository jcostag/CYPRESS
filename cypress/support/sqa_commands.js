Cypress.Commands.add("sqa_addToBasket", (product) => {
   cy.get("a").contains(product).click();
   cy.get(".customers-activity > .close").click();
   cy.get("#btn-cart > .add-to-cart").click();
});

Cypress.Commands.add("sqa_goToCart", (quantity) => {
   cy.get(".popup-box-wrap .qty-inp-s").click().type(quantity);
   cy.get(".popup-box-wrap .qty-inp-s").invoke("attr", "value").should("contain", quantity);
   cy.get(".popup-box-wrap .qty-inp-s").should("have.value", quantity);
   cy.get(".popup-box-wrap .right-buttons > .btn-2").click();
});

Cypress.Commands.add("sqa_checkout", () => {
   cy.get(".cart-checkout-buttons .with-card").click();
   cy.fixture("sqa_user").then(user => {
      cy.get("#shipping_address-firstname").type(user.firstName);
      cy.get("#shipping_address-lastname").type(user.lastName);
      cy.get("#shipping_address-street_address").type(user.streetAddress);
      cy.get("#shipping_address-postcode").type(user.postCode);
      cy.get("#shipping_address-city").type(user.city);
      cy.get("#shipping_address-email_address").type(user.emailAddress);
      cy.get("#checkout-email_address").type(user.emailAddress);
   })
});

Cypress.Commands.add("sqa_payment", (message) => {
   cy.get("#payment_method [type='radio']").check("cod");
   cy.get("#checkout-terms").check();
   cy.get(".btn-next").click();
   cy.get(".main-content .text-2").should("have.text", message);
});

Cypress.Commands.add("addToBasket", () => {
    cy.get(".customers-activity").children(".close").click();
    cy.get("#btn-cart").children(".add-to-cart").click();
});
