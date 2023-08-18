
// import node modules test and expect to operate with their methods
const {test, expect} = require('@playwright/test');

// create test block which will use test and export
test('firstTest', async ({page}) => {
    // using page instance functions
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
    await expect(page).toHaveURL(/.*google/);
});