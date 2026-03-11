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
      this.page.locator(
        `//div/a[contains(text(),'${text}')]/span`,
      );
    this.get_list = (text)=> this.page.locator(`//td[@type="${text}"]//a`)
  }
}
export {Accounts}