import { expect } from "@playwright/test";
import { test } from "../../fixture";

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email*' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password* Password' });
        this.submitButton = page.getByRole('button', { name: 'Sign In' });
    }
    
    async fillEmail(email) {
        await this.emailInput.fill(email);
    }
    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }
    async clickSubmit() {
        await this.submitButton.click();
    }
}