const { defineConfig } = require("cypress");
import { allureCypress } from "allure-cypress/reporter";

module.exports = defineConfig({
  e2e: {
    viewportHeight: 720,
    viewportWidth: 1280,
    baseUrl: "https://telnyx.com",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    env: {
      CI: process.env.CI === "true",
    },
  },
});
