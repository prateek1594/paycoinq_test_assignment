import { test, expect} from  '@playwright/test';
import { LoginPage } from '../pages/utils/loginPage';
import {UserNames, Passwords} from '../enums';

test.describe('Chekcing log-in scenarios @authorization' , () => {
test('Check that login is successfull' ,async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterCredentials(UserNames.correctUsername, Passwords.correctPassword);
    await loginPage.loginButton.click();
    expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html')
});

test('Check invalid login' ,async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterCredentials(UserNames.wrongUsername, Passwords.wrongPassword);
    await loginPage.loginButton.click();
    expect(loginPage.errorMessage).toBeVisible();
});

});