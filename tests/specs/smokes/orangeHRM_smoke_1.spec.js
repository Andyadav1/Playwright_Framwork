import { test, expect } from "@playwright/test";
import test_env from "../../../test_data/env.json" with { type: "json" };
import { PageObjectManager } from "../../pageObjects/pageObjectManager";

test.describe(`Verify all panels on dashboard`, async () => {
  test.beforeAll("login as username", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    let pom = new PageObjectManager(page);
    pom.getDasboardPage().login
  });
});
