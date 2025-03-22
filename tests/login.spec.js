import { expect } from '@playwright/test';
import { test } from '../fixture';

test('navigation luma', async ({ page }) => {
  await page.goto('/');
});

test('login', async ({ page, homePage }) => {
  await page.goto('/');
  await homePage.login('elena98712345@mail.com', 'elena98712345');

});