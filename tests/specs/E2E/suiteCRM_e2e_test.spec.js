import { test, expect } from "@playwright/test";
import test_data from "../../../test_data/E2E_data.json" with { type: "json" };
import { PageObjectManager } from "../../pageObjects/pageObjectManager";

const username = test_data.username;
let password;

test.describe(`${test_data.testcase}`, async () => {
  /**@type {import("@playwright/test").Page} **/
  let page;
  /**@type{PageObjectManager} */
  let pom;

  test.beforeEach(`login as ${username}`, async ({ browser }) => {
    let context = await browser.newContext();
    page = await context.newPage();
    pom = new PageObjectManager(page);
    password = pom.getHomePage().get_credentials(username);
    await pom.getHomePage().login(username, password);
  });
  test.only(`go to the accounts page and vlidate the sort function`, async () => {
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
    let sortecdlist = initialList.sort();
    expect(sortecdlist).toEqual(initialList);
  });
  test(`go to the Accounts page and verify the filter function`, async () => {
    await pom.getAccountPage().navigateto("Sales", "Accounts");
    await pom.getAccountPage().clickAnElement(pom.getAccountPage().filter_btn);
    await pom.getAccountPage().name_filter.fill("Avery Software Co");
    await pom
      .getAccountPage()
      .clickAnElement(pom.getAccountPage().search_filter);
    let filtered_list = await pom
      .getAccountPage()
      .get_list("name")
      .allTextContents();
    let verification = filtered_list.every(
      (text) => text === "Avery Software Co",
    );
    expect(verification).toBe(true);
  });
});

//test.describe(``)
