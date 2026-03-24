import Common from "./common";
class Accounts extends Common {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.sort_by = (text) =>
      this.page.locator(`//div/a[contains(text(),'${text}')]/span`);
    this.filter_btn = this.page.locator(`//a[@title="Filter"]`).first();
    this.get_list = (text) => this.page.locator(`//td[@type="${text}"]//a`);
    this.name_filter = this.page.locator(`//input[contains(@id,'name_basic')]`);
    this.search_filter = this.page.locator(`//input[@title="Search"]`);
  }
}
export { Accounts };
