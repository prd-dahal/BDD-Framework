import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I am example", () => {
  expect("example").to.match(/example/);
});

Given("A truthy value is true", () => {
  expect(true).to.be.true;
});
