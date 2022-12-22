const { defineConfig } = require("cypress");
const plugins = require("./BDD/plugins");

module.exports = defineConfig({
  projectId: "om39c4",
  reporter: "mochawesome",
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      plugins(on, config);
    },
    specPattern: "BDD/e2e/feature/**/*.feature",
    supportFile: "BDD/support/e2e.{js,jsx,ts,tsx}",
    fixturesFolder: "BDD/fixtures",
    screenshotsFolder: "BDD/screenshots",
    videosFolder: "BDD/videos",
    downloadsFolder: "BDD/downloads",
  },
});
