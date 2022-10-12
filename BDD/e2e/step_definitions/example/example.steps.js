import { Given, When } from "cypress-cucumber-preprocessor/steps";
// const { numberValid } = require("@rakesh/lib");

Given("I am example", () => {
  expect("example").to.match(/example/);
});

Given("A truthy value is true", () => {
  expect(true).to.be.true;
});
