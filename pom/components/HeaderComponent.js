export default class HeaderComponent {
    constructor(page) {
        this.page = page;
    }
    
    async clickSignIn() {
        await this.page.getByRole('link', { name: 'Sign In' }).click();
    }
    async clickSignOut() {
        await this.page.getByRole('link', { name: 'Sign Out' }).click();
    }
    async clickMyAccount() {
        await this.page.getByRole('link', { name: 'My Account' }).click();
    }
}
