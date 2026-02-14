import credentials from "../../test_data/login_credentials.json" with { type: "json" };
export default class Common {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
    this.banner = page.locator(`//div[@class="oxd-brand-banner"]`);
    
    
    this.panel = (tab_name) =>
      page.locator(
        `//ul/li[@class="oxd-main-menu-item-wrapper"]//span[text()='${tab_name}']`,
      );
  }
  Admin;
  /**
   *
   * @param {import("@playwright/test").Locator} locator
   */
  async clickAnElement(locator) {
    await locator.click();
  }
  get_credentials(username) {
    for (const credential in credentials){
      if (credentials[credential].username === username){
        return credentials[credential].password
      }

    }
    
  }

}
