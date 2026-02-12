export default class Common {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
    let panel = (tab_name) =>
      page.locator(
        `//ul/li[@class="oxd-main-menu-item-wrapper"]//span[text()='${tab_name}']`,
      );
  }
Admin
  /**
   *
   * @param {import("@playwright/test").Locator} locator
   */
  async clickAnElement(locator) {
    await locator.click();
  }
}
