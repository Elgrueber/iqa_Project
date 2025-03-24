import { expect } from '@playwright/test';
import { test } from '../fixture';
import { loginUser } from '../helpers/preconditions';
import { pages } from '../testData';

for (const pageData of pages) {
    test(`navigation to ${pageData.name} page`, async ({ page, menuComponent }) => {
        await page.goto('/');
        await menuComponent[pageData.clickMethod]();
        expect(page.url()).toContain(pageData.expectedUrl);
    });
}