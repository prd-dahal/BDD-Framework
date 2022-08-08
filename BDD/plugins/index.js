const multipleCucumberReporter = require("./multiple-cucumber-reporter");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {
  on("file:preprocessor", cucumber());
  on("after:run", () => {
    multipleCucumberReporter();
  });
};
