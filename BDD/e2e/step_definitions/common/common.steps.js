import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { splitDateIntoDayMonthYear } from "../../step_definitions/utils/index.js";
import { commonInterceptors } from "../../../support/interceptors";

Given("my previous records are deleted of {string}", (PHONE_NUMBER) => {
  cy.removeUser(PHONE_NUMBER);
});

When("I visit url {string}", (url) => {
  commonInterceptors();
  cy.visit(url);
});

Then(
  "click on TAG {string} that contains TEXT {string}",
  (TAG, HTMLCONTENT) => {
    cy.get(`${TAG}`).contains(`${HTMLCONTENT}`).click();
  }
);

Then(
  "select TEXT {string} of SELECTORNAME {string} and SELECTORVALUE {string}",
  (TEXT, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}=${SELECTORVALUE}]`).select(TEXT);
  }
);

Then(
  "click on TAG {string} SELECTORNAME {string} SELECTORVALUE {string}",
  (TAG, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`${TAG}[${SELECTORNAME}=${SELECTORVALUE}]`).click();
  }
);

Then(
  "click on SELECTORNAME {string} SELECTORVALUE {string}",
  (SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}="${SELECTORVALUE}"]`).click({ force: true });
  }
);

Then("click on DATA-TESTID {string}", (SELECTORVALUE) => {
  cy.get(`[data-testid="${SELECTORVALUE}"]`).click({ force: true });
});

Then(
  "type TEXT {string} on SELECTORNAME {string} SELECTORVALUE {string}",
  (TEXT, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}="${SELECTORVALUE}"]`).type(TEXT);
  }
);

Then("select date {string} on SELECTORNAME {string}", (date, selector) => {
  const splittedDate = splitDateIntoDayMonthYear(date);
  cy.fillDate(splittedDate, selector);
});

Then("FillOTP PHONE_NUMBER {string}", (PHONE_NUMBER) => {
  cy.fillOtpAPI(PHONE_NUMBER);
});

Then("wait for {string} miliseconds", (seconds) => {
  cy.wait(Number(seconds));
});

Then(
  "Upload IMAGE {string} on SELECTORNAME {string} SELECTORVALUE {string}",
  (IMAGE, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}="${SELECTORVALUE}"]`).selectFile(
      `${Cypress.env("CYPRESS_IMAGE_PATH")}${IMAGE}`
    );
    cy.wait("@uploadImage");
  }
);

Then("wait until user is registered", () => {
  cy.wait("@registeredUser");
});

Then("payme fillOtp with {string}", (OTP) => {
  cy.fillOtpPayme(OTP);
});
