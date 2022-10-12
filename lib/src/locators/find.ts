/**
 * Finds the descendent DOM elements of a specific selector.
 * @param {string} selector - any selector
 * @return the descendent DOM elements of a specific selector
 */
export const find = (selector: string) => cy.find(selector);
