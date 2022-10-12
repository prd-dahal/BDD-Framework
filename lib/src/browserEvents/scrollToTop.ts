/**
 * Scrolls to top of the page
 * @return void
 */
export const scrollToTop = () => {
  cy.scrollTo(0, 0, {
    easing: "swing",
    duration: 1000,
  });
};
