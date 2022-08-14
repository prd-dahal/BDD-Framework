import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I am on home page", () => {
  expect("example").to.match(/examplee/);
});

// When("I resize the window to {breakpoint}", () => {});

// When("I view the window in {device}", () => {});
