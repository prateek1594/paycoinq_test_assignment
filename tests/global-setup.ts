// setting up the global configurations for test to be used throughout the entire E2E suite
import { chromium, FullConfig } from "@playwright/test";
import { LoginPage } from "../pages/utils/loginPage";
import 'dotenv/config' ;

async function globalSetup(config:FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterCredentials(process.env.TEST_USER ?? '', process.env.TEST_PASSWORD ?? '');
    await loginPage.loginButton.click();
   
    // Saving the login information so that we can use them later on in our suite
    await page.context().storageState({path : 'storageState.json'})
    await browser.close();   
}

export default globalSetup;


