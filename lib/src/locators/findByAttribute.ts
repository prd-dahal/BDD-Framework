/**
 * Finds the DOM elements with given attribute.
 * @param {string} key - attribute key
 * @param {string} value - atrribute value
 * @return the DOM elements with given attribute
 */
export const findByAttribute = (key: string, value: string) =>
  cy.get(`[${key}=${value}]`);
