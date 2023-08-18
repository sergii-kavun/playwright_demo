import { test, expect } from '@playwright/test';

test('recordTest', async ({ page }) => {
    // defining variables
    const username = page.locator('[data-test="username"]');
    const password = page.locator('[data-test="password"]');
    const loginButton = page.locator('[data-test="login-button"]');
    const url = 'https://www.saucedemo.com/';

    // navigate to url
    await page.goto(url);
    await expect(page).toHaveURL(/.*sauce/);

    // populate login data and enter
    //await page.pause();
    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await page.locator('id=login-button').click();
    // await loginButton.click();
    await expect(page).toHaveTitle('Swag Labs');

    // Logout
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
});