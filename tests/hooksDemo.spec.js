import {test, expect} from "@playwright/test";

// to group test
test.describe('Tests', () => {

test.beforeEach(async({page}) => {

    // steps to login
    await page.goto('http://saucedemo.com');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
})

test.afterEach(async({page}) => {
    await page.close();
})

test('Hooks_demo: homepage @smoke', async({page}) => {

    // adding items to cart
    await page.locator('#item_4_title_link').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.getByRole('img', { name: 'Sauce Labs Backpack' }).click();
    await page.locator('[data-test="back-to-products"]').click();

})

test('Hooks_demo: Logout', async({page}) => {

    // steps to logout
    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.locator('a#logout_sidebar_link').click();
    await expect(page.locator('div.login_logo')).toBeVisible();

})
})