import { test, expect } from '@playwright/test';
import { ItemSelectionPage } from '../pages/utils/itemSelectionPage';

test.describe('Checking the filtering/sorting functionality' , () => {

    // getting the saved log-in information and using it
    test.use({storageState: 'storageState.json'});
    
    // Getting the sort options with the first expected item
    const sortlists: string[][] = [
        ['Name (A to Z)', 'Sauce Labs Backpack'],
        ['Name (Z to A)', 'Test.allTheThings() T-Shirt (Red)'],
        ['Price (low to high)', 'Sauce Labs Onesie'],
        ['Price (high to low)', 'Sauce Labs Fleece Jacket']
    ];

    for (const sortlist of sortlists) {
        test(`Sorting by ${sortlist[0]} @feature`, async ({ page }) => {
            const itemselectionpage = new ItemSelectionPage(page);
            await itemselectionpage.goto();
            await itemselectionpage.sortFilterDropDown.selectOption({ label: sortlist[0] });
            await expect(itemselectionpage.itemList.first().locator('div.inventory_item_name')).toContainText(sortlist[1]);           
        });
    };
});