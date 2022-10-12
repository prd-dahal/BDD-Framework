/**
 * Fetches the given cookie
 * @param {string} cname - cookie name
 * @param {object} options - cypress options
 * @return void
 */
export const getCookie = (name: string, options?: {}) => cy.getCookie(name);
