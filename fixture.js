import { test as base } from '@playwright/test';
import HomePage from './pom/pages/HomePage.js';

export const test = base.extend({
    /** @type { HomePage } */
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
});