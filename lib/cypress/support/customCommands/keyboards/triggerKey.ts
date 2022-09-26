Cypress.Commands.add(
  "triggerKey",
  { prevSubject: "element" },
  (subject, key) => {
    if (subject) {
      cy.wrap(subject).then((el) => {
        cy.wrap(el).type(`{${key}}`);
      });
    }
  }
);
