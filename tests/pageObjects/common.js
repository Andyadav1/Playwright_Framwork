import { waitForDebugger } from "inspector/promises";
import credentials from "../../test_data/login_credentials.json" with { type: "json" };
import { isMarkedAsUntransferable } from "worker_threads";
import test from "@playwright/test";
export default class Common {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
    this.page_validation = (text) =>
      this.page.locator(`//div/h2[contains(text(),'${text}')]`);
    this.top_panel = (tab_name) =>
      this.page.locator(
        `//span[@class="notCurrentTab"]/a[contains(text(),'${tab_name}')]`,
      );
    this.top_sub_pane = (top_panel, sub_panel) =>
      this.page.locator(
        `//span/a[contains(text(),'${top_panel}')]/../../span/ul/li/a[contains(text(),'${sub_panel}')]`,
      );
  }
  /**
   *
   * @param {import("@playwright/test").Locator} locator
   */
  async clickAnElement(locator) {
    await locator.click();
  }
  get_credentials(username) {
    for (const credential in credentials) {
      if (credentials[credential].username === username) {
        return credentials[credential].password;
      }
    }
  }
  async navigateto(panel, tab) {
    await this.top_panel(panel).hover();
    await this.clickAnElement(this.top_sub_pane(panel, tab));
  }
}
