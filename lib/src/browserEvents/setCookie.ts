/**
 * Sets the given cookie on the document
 * @param {string} cname - cookie name
 * @param {string} cvalue - cookie value
 * @param {object} options - cypress options
 * @return void
 */
export const setCookie = (cname: string, cvalue: string, options?: {}) => {
  cy.setCookie(cname, cvalue, options);
};
