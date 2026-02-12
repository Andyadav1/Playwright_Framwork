import Common from "./common";

class Dashboard extends Common {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
  }

  async login(username,password){
    await this.clickAnElement
  }
}
export { Dashboard };
//export default new Dashboard();