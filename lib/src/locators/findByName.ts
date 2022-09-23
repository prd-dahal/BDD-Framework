/**
 * Finds the element by provided HTML tag and value of its name attribute.
 * @param {HTMLElement} tag  - HTML tag
 * @param {string} nameValue - value of the name attribute of given tag
 * @return the DOM elements with given HTML tag and its name attribute.
 */
export const findByName = (tag: HTMLElement, nameValue: string) =>
  cy.get(`${tag}[name="${nameValue}"]`);
