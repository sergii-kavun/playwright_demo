import {test, expect, chromium} from "@playwright/test";

// separate test to check how specify slow motion and video insude test

test('slow motion and video demo', async() =>{
    // creating new instances within specific test
    const browser = await chromium.launch({
        slowMo: 1000,
        headless: false
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width:800, height:800}
        }
    });
    const page = await context.newPage();

    let url = 'https://www.saucedemo.com/';
    let username = page.locator('input#user-name');
    let password = page.locator('input#password');
    let loginButton = page.locator('input#login-button');

    // steps to login
    await page.goto(url);
    await expect(page).toHaveTitle('Swag Labs');
    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();

    // close context
    await context.close();
})