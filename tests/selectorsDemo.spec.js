import {test, expect} from '@playwright/test';

// first test with selectors
test('Selectors demo', async({page}) => {
    let url = 'https://www.saucedemo.com/';
    let username = page.locator('input#user-name');
    let password = page.locator('input#password');
    let loginButton = page.locator('input#login-button');

    await page.goto(url);
    await expect(page).toHaveTitle('Swag Labs');

    // Using placeholder of element
    await page.getByPlaceholder('Username').fill('typeUsername');

    // Direct action on selector
    await page.click('input#user-name');
    await page.fill('input#user-name', 'HeyYOu');

    // Identify selector and then apply action
    await page.locator('input#user-name').fill('NotYou');

    // Using Xpath
    await page.locator('//input[@name="password"]').fill("mouse");

    // Using visible text on element
    await page.locator('text=Login').click();
    await page.locator('input:has-text("Login")').click();

    // Action on defined selectors
    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();


} )
