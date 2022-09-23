/**
 * @return the DOM elements with given attribute.
 */
export const findByAttribute = (key: string, value: string) =>
  cy.get(`[${key}=${value}]`);
