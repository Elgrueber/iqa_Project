import { expect } from "@playwright/test";
import { test } from "../../fixture";

export default class HomePage {
    constructor(page) {
        this.page = page;
    }

    async login(email, password) {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
        await this.page.getByRole('textbox', { name: 'Email*' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Password* Password' }).fill(password);
        await this.page.getByRole('button', { name: 'Sign In' }).click();
    }
}