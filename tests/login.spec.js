import { expect } from '@playwright/test';
import { test } from '../fixture';
import { loginUser } from '../helpers/preconditions';


test('navigation to website', async ({ page }) => {
  await page.goto('/');
});

let email = process.env.USER_EMAIL;
let password = process.env.USER_PASSWORD;

test('user able to login with correct credentials', async ({ 
  page,
  loginPage,
  headerComponent,
}) => {
  await page.goto('/');
  await headerComponent.clickSignIn();
  await loginPage.fillEmail(env.process.USER_EMAIL);
  await loginPage.fillPassword(env.process.USER_PASSWORD);
  await loginPage.clickSubmit();
})

// test.only('user doint smth', async ({
//   page,
//   loginUser,
// }) => {
//   await loginUser(page, loginPage, headerComponent);
// }
// );