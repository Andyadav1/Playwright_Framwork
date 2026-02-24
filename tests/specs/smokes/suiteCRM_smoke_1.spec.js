import { test, expect } from "@playwright/test";
import test_env from "../../../test_data/env.json" with { type: "json" };
import test_data from "../../../test_data/smoke_data.json" with { type: "json" };
import { PageObjectManager } from "../../pageObjects/pageObjectManager";

import fs from "fs";

const username = test_data.username;
let password;
test.describe.configure({ mode: "serial" });
test.describe(`${test_data.testcase}`, async () => {
  /** @type {import("@playwright/test").Page} */
  let page;
  /** @type {PageObjectManager} */
  let pom;

  test.beforeAll("login as username", async ({ browser }) => {
    let context = await browser.newContext();
    page = await context.newPage();
    pom = new PageObjectManager(page);
    password = pom.getHomePage().get_credentials(username);
    await pom.getHomePage().login(username, password);
  });
  for (const panel in test_data.panel_tabs) {
    test(`Verify that the ${
      test_data.panel_tabs[panel]
    } panel is accessible`, async () => {
      pom
        .getHomePage()
        .clickAnElement(pom.getHomePage().panels(test_data.panel_tabs[panel]));
      await page.waitForLoadState("networkidle");
      await page.waitForLoadState("networkidle");
      await expect(page.locator(`//span/h6`)).toHaveText(
        test_data.panel_validation[panel],
      );
    });
  }
});
