/**
 * Gets the given key from Local Storage
 * @param {string} key - Key set in localStorage
 * @return void
 */
export const getLocalStorage = (key: string) => {
  return cy.then(() => {
    return window.localStorage.getItem(key);
  });
};
