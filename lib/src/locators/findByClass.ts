/**
 * @return all the elements by given class
 */
export const findByClass = (className: string) => cy.get(`.${className}`);
