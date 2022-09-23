Cypress.Commands.add("triggerTab", { prevSubject: "element" }, (subject) => {
  if (subject) {
    cy.wrap(subject).then((el) => {
      cy.wrap(el).type(`{tab}`);
    });
  }
});
