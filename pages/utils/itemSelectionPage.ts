import { Locator, Page } from "@playwright/test";
import { SauceLabMainPage } from "./mainPage";

export class ItemSelectionPage extends SauceLabMainPage {
    readonly itemList: Locator;
    readonly sortFilterDropDown: Locator;
    readonly itemFilterDropDown: Locator;

    constructor(page: Page) {
        super(page)
        this.itemFilterDropDown = page.locator('select.product_sort_container');
        this.itemList = page.locator('div.inventory_list > div.inventory_item');
        this.sortFilterDropDown = page.locator('select.product_sort_container');   
    }

    async goto() {
        await this.page.goto('/inventory.html');
    }
}