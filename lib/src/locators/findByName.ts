/**
 * @return the DOM elements with given HTML tag and its name attribute.
 */
export const findByName = (tag: HTMLElement, name: string) =>
  cy.get(`${tag}[name="${name}"]`);
