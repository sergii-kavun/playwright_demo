import {test, expect} from "@playwright/test";

// test to play with assertions

test ('Assertions demo', async ({page}) => {
    // define elements
    let url = 'https://www.saucedemo.com/';
    let username = page.locator('input#user-name');
    let password = page.locator('input#password');
    let loginButton = page.locator('input#login-button');
    let headerLabel = page.locator('div.app_logo');
    let shoppingCart = page.locator('a.shopping_cart_link');

    // steps to login
    await page.goto(url);
    await expect(page).toHaveTitle('Swag Labs');
    await username.fill("standard_user");
    await password.fill("secret_sauce");
    await loginButton.click();

    // various assertions

    // Page to have URL / title
    await expect(page).toHaveURL(/.*inventory/); // using Xpath
    await expect(page).toHaveTitle(/.*Labs/); // using Xpath

    // check element is present or not
    await expect(headerLabel).toHaveCount(1);
    // another way to use presence that returns boolean in conditions
    if (await page.$('div.app_logo')) {
        await headerLabel.click();
    }

    // check element is visible or hidden
    await expect(shoppingCart).toBeVisible();
    await expect.soft(headerLabel).toBeHidden(); // soft assertion

    //check element to be enabled/disabled
    await expect(shoppingCart).toBeEnabled();
    await expect.soft(headerLabel).toBeDisabled(); // soft assertion

    // check text matches or not
    await expect(headerLabel).toHaveText("Swag Labs");
    await expect(headerLabel).toContainText("Swag");
    await expect(headerLabel).not.toHaveText("XXX");

    // TO have attribute or class
    await expect(shoppingCart).toHaveAttribute('class', 'shopping_cart_link');
    await expect(shoppingCart).toHaveClass('shopping_cart_link');

    await page.pause();

    // TO have screenshot
    await expect(page).toHaveScreenshot();
})

