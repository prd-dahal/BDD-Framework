/**
 * Visits the given URL
 * @param {string} URL - URL to visit
 * @return void
 */
export const visit = (URL: string) => {
  cy.visit(URL);
};
