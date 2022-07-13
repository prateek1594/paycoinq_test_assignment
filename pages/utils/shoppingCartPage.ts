import { Locator, Page } from '@playwright/test';
import { SauceLabMainPage } from './mainPage';

export class ShoppingCartPage extends SauceLabMainPage {
    readonly shoppingCartItemsList: Locator;
    readonly checkoutButton: Locator;


    constructor(page: Page) {
        super(page);
        this.shoppingCartItemsList = page.locator('div.cart_list >> div.cart_item');
        this.checkoutButton = page.locator('button#checkout');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/cart.html');
    }
}