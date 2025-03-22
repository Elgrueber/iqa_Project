import { test, expect } from '@playwright/test';
//import { test } from '../fixture';

test.only('test', async ({ page }) => {
  await page.goto('https://letcode.in/frame');
  //await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter name' }).fill('Elena');
  //await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter email' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().getByRole('textbox', { name: 'Enter email' }).fill('Grue');
  //await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).click();
  await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).fill('elena@email.com');
  //await page.locator('iframe[name="firstFr"]').contentFrame().locator('app-frame-content iframe').contentFrame().getByRole('textbox', { name: 'Enter email' }).press('Enter');
});