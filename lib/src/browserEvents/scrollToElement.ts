/**
 * Scrolls to the selected Element
 * @param {string} elementSelector - Selector to select Element
 * @return void
 */
export const scrollToElement = (elementSelector: string) => {
  cy.get(elementSelector).scrollIntoView({ easing: "swing", duration: 1000 });
};
