import { Locator, Page } from "@playwright/test";

export class SauceLabMainPage {
    readonly page: Page;
    readonly shoppingCartButton: Locator;
    readonly menuButton: Locator;
    readonly logoutButton: Locator;
    readonly closeMenuButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoppingCartButton = page.locator('div#shopping_cart_container a');
        this.menuButton = page.locator('button#react-burger-menu-btn');
        this.logoutButton = page.locator('a#logout_sidebar_link');
        this.closeMenuButton = page.locator('button#react-burger-cross-btn');
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutButton.click();
    }
}