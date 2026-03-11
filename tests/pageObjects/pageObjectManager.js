import { Home } from "./home";
import { Accounts } from "./accounts";
class PageObjectManager {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.home = new Home(page);
    this.accounts = new Accounts(page);
  }
  getHomePage() {
    return this.home;
  }
  getAccountPage() {
    return this.accounts;
  }
}
export { PageObjectManager };
