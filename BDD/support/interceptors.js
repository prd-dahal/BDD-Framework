export const commonInterceptors = () => {
  cy.intercept(
    "POST",
    `${Cypress.env("CYPRESS_CMS_URL")}travel-insurance/registrations/otp/`
  ).as("sendOTP");

  cy.intercept(
    "POST",
    `${Cypress.env(
      "CYPRESS_CMS_URL"
    )}travel-insurance/registrations/otp/verify/?refid=`
  ).as("verifyOTP");

  cy.intercept(
    "POST",
    `${Cypress.env("CYPRESS_CMS_URL")}travel-insurance/registrations/ocr/`
  ).as("uploadImage");

  cy.intercept(
    "POST",
    `${Cypress.env("CYPRESS_DASHBOARD_URL")}user/registration/travel-insurance`
  ).as("registeredUser");

  cy.intercept(
    "GET",
    `${Cypress.env("DASHBOARD_API")}payment/selected-product/travel-insurance/`
  ).as("dashboardPolicy");
};

export const insonInterceptors = () => {
  // all interceptors for inson
};

export const mshieldInterceptors = () => {
  // all interceptors for mshield
};
