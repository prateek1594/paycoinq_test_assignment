import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInputLocator: Locator;
    readonly passwordInputLocator: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInputLocator = page.locator('input#user-name');
        this.passwordInputLocator = page.locator('input#password');
        this.loginButton = page.locator('input#login-button');
        this.errorMessage = page.locator('div.error-message-container ')
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async enterCredentials(username: string, password: string) {
        await this.usernameInputLocator.fill(username);
        await this.passwordInputLocator.fill(password);
    }
}