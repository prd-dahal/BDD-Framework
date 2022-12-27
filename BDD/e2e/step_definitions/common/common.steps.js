import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { splitDateIntoDayMonthYear } from "../../step_definitions/utils/index.js";
import {
  commonInterceptors,
  insonInterceptors,
  mshieldInterceptors,
} from "../../../support/interceptors";
import { envVariables, viewports } from "../../../config";

Given("my previous records are deleted of {string}", (PHONE_NUMBER) => {
  cy.removeUser(PHONE_NUMBER);
});

Given("the test is done in {string}", (DEVICE) => {
  const deviceFound = viewports.find((device) => device === DEVICE);
  console.log("The device is found", deviceFound);
  if (!deviceFound) {
    throw new Error("The device is not found");
  } else {
    cy.viewport(DEVICE);
  }
});

Given("interceptors are loaded", () => {
  commonInterceptors();
  switch (envVariables["COMPANY"]) {
    case "INSON":
      insonInterceptors();
      break;
    case "MSHIELD":
      mshieldInterceptors();
      break;
  }
});

When("I visit url from config", () => {
  cy.visit(envVariables["CYPRESS_TEST_URL"]);
});

When("I visit url {string}", (url) => {
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

Then("click on {string}", (SELECTORVALUE) => {
  cy.get(`[data-testid="${SELECTORVALUE}"]`).click({ force: true });
});

Then("click on {string} element of {string}", (POSITION, SELECTORVALUE) => {
  cy.get(`[data-testid="${SELECTORVALUE}"]`)
    .eq(Number(POSITION))
    .click({ force: true });
});

Then(
  "type TEXT {string} on SELECTORNAME {string} SELECTORVALUE {string}",
  (TEXT, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}="${SELECTORVALUE}"]`).type(TEXT);
  }
);
Then("type TEXT {string} on {string}", (TEXT, SELECTORVALUE) => {
  cy.get(`[${"data-testid"}="${SELECTORVALUE}"]`).type(TEXT);
});

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
  "upload IMAGE {string} on SELECTORNAME {string} SELECTORVALUE {string}",
  (IMAGE, SELECTORNAME, SELECTORVALUE) => {
    cy.get(`[${SELECTORNAME}="${SELECTORVALUE}"]`).selectFile(
      `${envVariables["CYPRESS_IMAGE_PATH"]}${IMAGE}`
    );
  }
);

Then("upload IMAGE {string} on {string}", (IMAGE, SELECTORVALUE) => {
  cy.get(`[data-testid="${SELECTORVALUE}"]`).selectFile(
    `${envVariables["CYPRESS_IMAGE_PATH"]}${IMAGE}`
  );
});

Then("wait until image is uploaded", () => {
  cy.wait("@uploadImage");
});

Then("wait until user is registered", () => {
  cy.wait("@registeredUser");
});
Then("wait until subscribe", () => {
  cy.wait("@subscribe");
});

Then("payme fillOtp with {string}", (OTP) => {
  cy.wait("@paymeSendOTP");
  cy.fillOtpPayme(OTP);
});
