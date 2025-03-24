export default class FooterComponent {
    constructor(page) {
        this.page = page;
        this.contactUsLink = this.page.getByRole('link', { name: 'Contact Us' });
        this.privacyPolicyLink = this.page.getByRole('link', { name: 'Privacy Policy' });
        this.termsOfServiceLink = this.page.getByRole('link', { name: 'Terms of Service' });
    }
    
    async clickContactUs() {
        await this.contactUsLink.click();
    }
    async clickPrivacyPolicy() {
        await this.privacyPolicyLink.click();
    }
    async clickTermsOfService() {
        await this.termsOfServiceLink.click();
    }
}
