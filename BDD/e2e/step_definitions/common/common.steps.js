import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("I am on {string}", (page) => {
  expect(true).to.be.true;
});

When("I view the page from {string}", async (device) => {
  // const switchDevice = require("@rakesh/lib")[device];
  // switchDevice();
});
