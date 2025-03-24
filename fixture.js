import { test as base } from '@playwright/test';
import HomePage from './pom/pages/HomePage.js';
import HeaderComponent from './pom/components/HeaderComponent.js';
import LoginPage from './pom/pages/LoginPage.js';
import MenuComponent from './pom/components/MenuComponent.js';

export const test = base.extend({
    /** @type { HomePage } */
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    /** @type { HeaderComponent } */
    headerComponent: async ({ page }, use) => {
        await use(new HeaderComponent(page));
    },
    /** @type { LoginPage } */
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    /** @type { LoginPage } */
    menuComponent: async ({ page }, use) => {
        await use(new MenuComponent(page));
    },
});