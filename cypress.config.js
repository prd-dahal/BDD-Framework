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
    env: {
      CYPRESS_DASHBOARD_URL: "https://dashboard.v2.taksure.xyz/api/v1/",
      CYPRESS_CMS_URL: "https://cms.v2.taksure.xyz/api/v1/",
      CYPRESS_DASHBOARD_USERNAME: "taksure",
      CYPRESS_DASHBOARD_PASSWORD: "taksure$$$123",
      CYPRESS_IMAGE_PATH: "BDD/fixtures/images/",
    },
  },
});
