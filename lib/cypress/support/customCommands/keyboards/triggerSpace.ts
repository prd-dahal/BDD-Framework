Cypress.Commands.add("triggerSpace", { prevSubject: "element" }, (subject) => {
  if (subject) {
    cy.wrap(subject).then((el) => {
      //empty string works as space in input field.
      cy.wrap(el).type(" ");
    });
  }
});
