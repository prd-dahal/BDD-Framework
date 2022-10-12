/**
 * Finds the element by provided id.
 * @param {string} id - id to find
 * @return the element by provided id
 */
export const findById = (id: string) => cy.get(`#${id}`);
