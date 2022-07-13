import { Locator, Page } from "@playwright/test";
import { SauceLabMainPage } from "../utils/mainPage";

export class CompleteOrderPage extends SauceLabMainPage {
    readonly completeMessage : Locator;
    readonly homeBackButton : Locator;
    readonly completeTitle : Locator;

    constructor(page: Page) {
        super(page);
        this.completeMessage = page.locator('div.complete-text');
        this.homeBackButton = page.locator('button#back-to-products');
        this.completeTitle = page.locator('h2.complete-header');
    }

    async goto() {
        await this.page.goto('/cart.html')
    }
}