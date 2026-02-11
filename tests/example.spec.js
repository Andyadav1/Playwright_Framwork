import { test, expect } from "@playwright/test";

test(`login`, async ({ page }) => {
  page.goto("https://opensource-demo.orangehrmlive.com/");
  let input_by_name = (name) => page.locator(`//input[@name="${name}"]`);
  await input_by_name("username").fill("Admin");
  await input_by_name("password").fill("admin123");
  await page.locator('//button[@type="submit"]').click();
});
