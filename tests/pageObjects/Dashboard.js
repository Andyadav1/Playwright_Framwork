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
    this.inputByName = (name) => this.page.locator(`//input[@name="${name}"]`);
  }

  async login(username, password) {
    await this.page.goto(test_env.url);
    await this.input_by_name("username").fill(username);
    await this.input_by_name("password").fill(password);
    await this.clickAnElement('//button[@type="submit"]');
  }
}
export { Dashboard };
//export default new Dashboard();
