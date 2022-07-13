import { Locator, Page } from "@playwright/test";
import { SauceLabMainPage } from "../utils/mainPage";

export class OverviewPage extends SauceLabMainPage {
    readonly shoppingCartItemList : Locator;
    readonly shoppingCartFinishButton : Locator;
    readonly shoppingCartTotalSummary : Locator;

    constructor(page: Page) {
        super(page);
        this.shoppingCartItemList = page.locator('div.cart_list >> div.cart_item');
        this.shoppingCartFinishButton = page.locator('button#finish');
        this.shoppingCartTotalSummary = page.locator('div.summary_total_label');
    }

    async goto() {
        await this.page.goto('/checkout-step-two.html');
    }
}