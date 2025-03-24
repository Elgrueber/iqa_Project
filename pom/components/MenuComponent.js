export default class MenuComponent {
    constructor(page) {
        this.page = page;
        this.whatsnewLink = this.page.getByRole('menuitem', { name: 'What\'s New' });
        this.womenLink = this.page.getByRole('menuitem', { name: ' Women' });
        this.menLink = this.page.getByRole('menuitem', { name: ' Men' });           
        this.gearLink = this.page.getByRole('menuitem', { name: ' Gear' });
        this.trainingLink = this.page.getByRole('menuitem', { name: ' Training' })
        this.saleLink = this.page.getByRole('menuitem', { name: 'Sale' });
    }

    async clickWhatsNew() {
        await this.whatsnewLink.click();
    }

    async clickWomen() {
        await this.womenLink.click();
    }

    async clickMen() {
        await this.menLink.click();
    }

    async clickGear() {
        await this.gearLink.click();
    }

    async clickTraining() {
        await this.trainingLink.click();
    }
    async clickSale() {
        await this.saleLink.click();
    }
}
