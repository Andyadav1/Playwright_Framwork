import Common from "./common";
import test_env from "../../test_data/env.json" with { type: "json" };
class Home extends Common {
  /**
   *
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.inputByName = (name) => page.locator(`//input[@name="${name}"]`);
  }

  async login(username, password) {
    await this.page.goto(test_env.url);
    await this.inputByName("user_name").fill(username);
    await this.inputByName("username_password").fill(password);
    await this.clickAnElement(this.inputByName("Login"));
    await this.page.waitForLoadState("networkidle");
  }
}
export { Home };
//export default new Dashboard();
