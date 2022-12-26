import { envVariables } from "../config";
export const commonInterceptors = () => {
  cy.intercept(
    "POST",
    `${envVariables["CYPRESS_CMS_URL"]}**/registrations/otp/**`
  ).as("sendOTP");

  cy.intercept(
    "POST",
    `${envVariables["CYPRESS_CMS_URL"]}**/registrations/otp/verify/**`
  ).as("verifyOTP");

  cy.intercept(
    "POST",
    `${envVariables["CYPRESS_CMS_URL"]}**/registrations/ocr/`
  ).as("uploadImage");

  cy.intercept(
    "POST",
    `${envVariables["CYPRESS_DASHBOARD_URL"]}user/registration/*`
  ).as("registeredUser");

  cy.intercept(
    "GET",
    `${envVariables["DASHBOARD_API"]}payment/selected-product/**`
  ).as("dashboardPolicy");
  cy.intercept(
    "POST",
    `${envVariables["DASHBOARD_API"]}/payment/product/**/payment/**/subscribe`
  ).as("subscribe");
};

export const insonInterceptors = () => {
  // all interceptors for inson
  cy.intercept("POST", `${envVariables["PAYME_CHECKOUT_URL"]}`).as(
    "paymeSendOTP"
  );
};

export const mshieldInterceptors = () => {
  // all interceptors for mshield
};
