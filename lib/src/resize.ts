/**
 * Resizes the screen
 *
 * @reference https://docs.cypress.io/api/commands/viewport#Arguments
 * @returns void
 */

/**
 * Resize the window to 768*1024
 * ipad2, ipad-mini
 * @return void
 */
export const ipad2 = () => {
  return cy.viewport("ipad-2");
};

/**
 * Resize the window to 320*568
 * iphone3, iphone4, iphone5
 * @return void
 */
export const iphone5 = () => {
  return cy.viewport("iphone-5");
};

/**
 * Resize the window to 360*760
 * samsung-s10
 * @return void
 */
export const samsungS10 = () => {
  return cy.viewport("samsung-s10");
};

/**
 * Resize the window to 375*667
 * iphone6, iphone7, iphone8, iphonex, iphone-se2
 * @return void
 */
export const iphone6 = () => {
  return cy.viewport("iphone-6");
};

/**
 * Resize the window to 414*736
 * iphone6+, iphone-xr, samsung-note9
 * @return void
 */
export const iphone6Plus = () => {
  return cy.viewport("iphone-6+");
};

/**
 * Resize the window to 1280*800
 * macbook13
 * @return void
 */
export const macbook13 = () => {
  return cy.viewport("macbook-13");
};

/**
 * Resize the window to 1366*768
 * macbook11
 * @return void
 */
export const macbook11 = () => {
  return cy.viewport("macbook-11");
};

/**
 * Resize the window to 1440*900
 * macbook15
 * @return void
 */
export const macbook15 = () => {
  return cy.viewport("macbook-15");
};

/**
 * Resize the window to 1536*960
 * macbook16
 * @return void
 */
export const macbook16 = () => {
  return cy.viewport("macbook-16");
};
