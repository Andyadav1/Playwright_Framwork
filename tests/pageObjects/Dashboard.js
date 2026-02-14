import Common from "./common";
import test_env from "../../test_data/env.json" with { type: "json" };
class Dashboard extends Common {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.login_btn = page.locator('//button[@type="submit"]');
    this.inputByName = (name) => page.locator(`//input[@name="${name}"]`);
  }

  async login(username, password) {
    await this.page.goto(test_env.url);
    await this.page.waitForLoadState("networkidle");
    await this.inputByName("username").fill(username);
    await this.inputByName("password").fill(password);
    await this.clickAnElement(this.login_btn);
  }
}
export { Dashboard };
//export default new Dashboard();
