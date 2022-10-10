/**
 * Back to the previous URL from browser history.
 * @return void
 */
export const goBack = () => {
  cy.go("back");
};
