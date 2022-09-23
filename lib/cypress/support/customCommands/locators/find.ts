// Cypress.Commands.overwrite(
//   "find",
//   { prevSubject: "element" },
//   (subject, options) => {
//     if (subject) {
//       cy.wrap(subject).then((el) => {
//         cy.wrap(el).find(options);
//       });
//     }
//   }
// );
