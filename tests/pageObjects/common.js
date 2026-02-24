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
    this.top_panel = (tab_name) =>
      this.page.locator(
        `//span[@class="notCurrentTab"]/a[contains(text.,'${tab_name}')]`,
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
}
