/**
 * Find the elements by provided class.
 * @param {string} className - class to find
 * @return the element by provided class
 */
export const findByClass = (className: string) => cy.get(`.${className}`);
