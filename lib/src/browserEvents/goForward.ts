/**
 * Forward to the URL from browser history.
 * @return void
 */
export const goForward = () => {
  cy.go("forward");
};
