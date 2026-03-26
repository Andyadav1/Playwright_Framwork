// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/specs",
  globalSetup: "./tests/hooks/global-setup.js",
  globalTeardown: "./tests/hooks/global-teardown.js",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list"], // default console reporter
    ["html", { open: "never" }], // Playwright HTML report
    ["allure-playwright", { outputFolder: "allure-results" }],
  ] /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */,
  timeout: 5 * 60 * 1000,
  use: {
    browserName: "chromium",
    launchOptions: { args: ["--start-maximized"] },
    viewport: null,
    headless: true,
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
  },
});
