import { test, expect } from "@playwright/test";
import test_env from "../../../test_data/env.json" with { type: "json" };
import test_data from "../../../test_data/smoke_data.json" with { type: "json" };
import { PageObjectManager } from "../../pageObjects/pageObjectManager";

const username = test_data.username;
let password;
test.describe.configure({ mode: "serial" });
test.describe(`${test_data.testcase}`, async () => {
  /** @type {import("@playwright/test").Page} */
  let page;
  /** @type {PageObjectManager} */
  let pom;

  test.beforeAll(`login as ${username}`, async ({ browser }) => {
    let context = await browser.newContext();
    page = await context.newPage();
    pom = new PageObjectManager(page);
    password = pom.getHomePage().get_credentials(username);
    await pom.getHomePage().login(username, password);
  });
  for (const panel of test_data.top_bar) {
    for (const Sub_tab of test_data.panel_tabs[panel]) {
      test(`Verify that the ${panel} bar is accessible and shows the ${Sub_tab} button in its dropdown`, async () => {
        await pom.getHomePage().top_panel(panel).hover();
        await expect(
          pom.getHomePage().top_sub_pane(panel, Sub_tab),
        ).toBeVisible();
        await pom
          .getHomePage()
          .clickAnElement(pom.getHomePage().top_sub_pane(panel, Sub_tab));
        await page.waitForLoadState("networkidle");
        if (Sub_tab != "Home") {
          expect(pom.getHomePage().page_validation(Sub_tab)).toBeVisible();
        }
      });
    }
  }
});
