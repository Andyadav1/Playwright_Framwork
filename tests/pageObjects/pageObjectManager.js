import { Dashboard } from "./Dashboard";

class PageObjectManager {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.dashboard = new Dashboard(page);
  }
  getDasboardPage() {
    return this.dashboard;
  }
}
export { PageObjectManager };
