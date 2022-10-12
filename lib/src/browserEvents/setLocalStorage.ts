/**
 * Sets key value to the Local Storage
 * @param {string} key - key
 * @param {string} value - value
 * @return void
 */
export const setLocalStorage = (key: string, value: string) =>
  cy.then(() => {
    window.localStorage.setItem(key, value);
  });
