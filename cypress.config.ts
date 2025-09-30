import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 120000, // Set to a higher value, e.g., 120000ms (2 minutes)
    baseUrl: "http://localhost:4200",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
