/**
 * Deletes the given cookie
 * @param {string} cname - cookie name
 * @param {object} options - cypress options
 * @return void
 */
export const deleteCookie = (cname: string, options?: {}) => {
  cy.clearCookie(cname, options);
};
