Cypress.Commands.add("mouseDown", { prevSubject: "element" }, (subject) => {
  if (subject) {
    cy.wrap(subject).then((el) => {
      cy.wrap(el).trigger("mousedown");
    });
  }
});
