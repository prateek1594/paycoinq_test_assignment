import { test, expect} from '@playwright/test';
import { ShoppingCartPage } from '../pages/utils/shoppingCartPage';
import { AddressFullfilmentPage } from '../pages/checkoutUtilities/addressFullfilmentPage';
import { CompleteOrderPage } from '../pages/checkoutUtilities/completeOrderPage';
import { OverviewPage } from '../pages/checkoutUtilities/overviewPage';
import { ItemSelectionPage } from '../pages/utils/itemSelectionPage';
import {User, Messages} from '../enums';

test.describe('Placing a successfull order',() => {

    // Use the saved sign-in to get auto-login
    test.use({storageState: 'storageState.json'});

    test('Checking order flow @orderFlow', async ({ page }) => {
       
        //Adding first item to the cart

        const itemSelectionPage = new ItemSelectionPage(page);
        await itemSelectionPage.goto();
        await itemSelectionPage.itemList.first().locator('div.pricebar >> text=Add to cart').click();
        await itemSelectionPage.shoppingCartButton.click();

        const shoppingCartPage = new ShoppingCartPage(page);
        await expect(shoppingCartPage.shoppingCartItemsList.first().locator('div.inventory_item_name')).toContainText(Messages.firstItem);
        await shoppingCartPage.checkoutButton.click();

        //Perform Checkout

        const addressFullfilmentPage = new AddressFullfilmentPage(page);
        await addressFullfilmentPage.firstName.fill(User.userFirstName);
        await addressFullfilmentPage.LastName.fill(User.userLastName);
        await addressFullfilmentPage.postalCode.fill(User.userPostalCode);
        await addressFullfilmentPage.continueButton.click();

        const overviewPage = new OverviewPage(page);
        await expect(overviewPage.shoppingCartItemList.first().locator('div.inventory_item_name')).toContainText(Messages.firstItem);
        await expect(overviewPage.shoppingCartTotalSummary).toContainText(Messages.itemCost);
        await overviewPage.shoppingCartFinishButton.click();

        // Checking confirmation Messgae

        const completeOrderPage = new CompleteOrderPage(page);
        await expect(completeOrderPage.completeTitle).toContainText(Messages.successMessage);
        await expect(completeOrderPage.completeMessage).toContainText(Messages.confrimationMessage);
        await completeOrderPage.homeBackButton.click();
        await page.waitForURL('/invetory.html');

    });
});