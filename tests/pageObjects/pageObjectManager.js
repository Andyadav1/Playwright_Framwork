import { Home } from "./home";

class PageObjectManager {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.home = new Home(page);
  }
  getHomePage() {
    return this.home;
  }
}
export { PageObjectManager };
