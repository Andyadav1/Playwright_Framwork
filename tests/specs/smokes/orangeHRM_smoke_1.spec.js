import { test, expect } from "@playwright/test";
import test_env from "../../../test_data/env.json" with { type: "json" };
import test_data from "../../../test_data/smoke_data.json" with { type: "json" };
import { PageObjectManager } from "../../pageObjects/pageObjectManager";

const username = test_data.username;
let password;
test.describe.configure({mode:'serial '})
test.describe(`${test_data.testcase}`, async () => {
  let pom;

  test.beforeAll("login as username", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    pom = new PageObjectManager(page);
    password = pom.getDasboardPage().get_credentials(username);
    await pom.getDasboardPage().login(username, password);
    await expect(pom.getDasboardPage().banner).toBeVisible();
  });
  for (const panel in test_data.panel_tabs) {
    test(`Verify that the ${panel} panel is accessible`, async () => {});
  }
});
