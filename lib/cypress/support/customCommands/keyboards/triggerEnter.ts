Cypress.Commands.add("triggerEnter", { prevSubject: "element" }, (subject) => {
  if (subject) {
    cy.wrap(subject).then((el) => {
      cy.wrap(el).type(`{enter}`);
    });
  }
});
