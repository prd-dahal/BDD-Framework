import { Given } from "cypress-cucumber-preprocessor/steps/index";

Given("I test {string}", (company) => {
  cy.log("Company is", company);
});
