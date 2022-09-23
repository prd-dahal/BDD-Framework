/**
 * @return the element by id.
 */
export const findById = (id: string) => cy.get(`#${id}`);
