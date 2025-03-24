import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {

  await page.goto('https://letcode.in/frame');

  const iframe = page.locator('iframe[name="firstFr"]').contentFrame();
  await iframe.getByRole('textbox', { name: 'Enter name' }).fill('Elena');
  await iframe.getByRole('textbox', { name: 'Enter email' }).fill('Grue');

  const nestedIframe = iframe.locator('app-frame-content iframe').contentFrame();
  await nestedIframe.getByRole('textbox', { name: 'Enter email' }).fill('elena@email.com');
});