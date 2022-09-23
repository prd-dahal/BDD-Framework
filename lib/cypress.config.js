import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "src/**/__tests__/*.test.{js,ts, jsx, tsx}",
  },
});
