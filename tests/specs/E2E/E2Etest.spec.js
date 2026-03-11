import { test, expect } from "@playwright/test";
import test_data from "./../../../test_data/E2E_data.json" with { type: "json" };
import { PageObjectManager } from "../../pageObjects/pageObjectManager";

const username = test_data.username;
let password;

test.describe(`${test_data.testcase}`, async () => {
  /**@type {import("@playwright/test").Page} **/
  let page;
  /**@type{PageObjectManager} */
  let pom;

  test.beforeAll(`login as ${username}`, async ({ browser }) => {
    let context = await browser.newContext();
    page = await context.newPage();
    pom = new PageObjectManager(page);
    password = pom.getHomePage().get_credentials(username);
    await pom.getHomePage().login(username, password);
  });
  test(`go to the accounts page and vlidate the filter function`, async () => {
    await pom.getAccountPage().top_panel("Sales").hover();
    await expect(
      pom.getAccountPage().top_sub_pane("Sales", "Accounts"),
    ).toBeVisible();
    await pom
      .getAccountPage()
      .clickAnElement(pom.getAccountPage().top_sub_pane("Sales", "Accounts"));
    await page.waitForLoadState("networkidle");
    await pom
      .getAccountPage()
      .clickAnElement(pom.getAccountPage().sort_by("Name"));
    await page.waitForLoadState("networkidle");
    let initialList = await pom
      .getAccountPage()
      .get_list("name")
      .allTextContents();
    let sortecdlist = await initialList.sort();
    expect(sortecdlist).toEqual(sortecdlist);
  });
});
