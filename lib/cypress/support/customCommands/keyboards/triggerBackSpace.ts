Cypress.Commands.add(
  "triggerBackSpace",
  { prevSubject: "element" },
  (subject) => {
    if (subject) {
      cy.wrap(subject).then((el) => {
        cy.wrap(el).type(`{backspace}`);
      });
    }
  }
);
