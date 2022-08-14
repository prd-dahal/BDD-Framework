import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I am on {string}", (page) => {
  expect(true).to.be.truthy;
});

When("I view the page from {string}", async (device) => {
  const switchDevice = require("@rakesh/lib")[device];
  switchDevice();
});
