/**
 * Scrolls to the given Y Co-ordinate
 * @param {number} yCoordinate - Y Co-ordinate from top
 * @return void
 */
export const scrollDown = (yCoordinate: number) => {
  cy.scrollTo(0, yCoordinate, {
    duration: 1000,
    easing: "swing",
  });
};
