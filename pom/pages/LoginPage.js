import { expect } from "@playwright/test";
import { test } from "../../fixture";

export default class LoginPage {
    constructor(page) {
        this.page = page;
    }
    
    async fillEmail() {
        await this.page.getByRole('textbox', { name: 'Email*' }).fill(email);
    }
    async fillPassword() {
        await this.page.getByRole('textbox', { name: 'Password* Password' }).fill(password);
    }
    async clickSubmit() {
        await this.page.getByRole('button', { name: 'Sign In' }).click();
    }

}