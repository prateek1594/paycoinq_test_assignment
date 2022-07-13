import { Locator, Page } from "@playwright/test";
import { SauceLabMainPage } from "../utils/mainPage";

export class AddressFullfilmentPage extends SauceLabMainPage {
    readonly firstName : Locator;
    readonly LastName : Locator;
    readonly postalCode : Locator;
    readonly continueButton : Locator;

    constructor(page: Page) {
        super(page);
        this.firstName = page.locator('input#first-name');
        this.LastName = page.locator('input#last-name');
        this.postalCode = page.locator('input#postal-code');
        this.continueButton = page.locator('input#continue');

    }

    async goto() {
        await this.page.goto('/checkout-step-one.html');
    }
}