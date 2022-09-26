Cypress.Commands.add("mouseUp", { prevSubject: "element" }, (subject) => {
  if (subject) {
    cy.wrap(subject).then((el) => {
      cy.wrap(el).trigger("mouseup");
    });
  }
});
