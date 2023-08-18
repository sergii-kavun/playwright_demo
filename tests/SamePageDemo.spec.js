import {test, expect} from "@playwright/test";

// doing all the tests inside configured to run un serial describe block
test.describe('Group', () => {
    test.describe.configure({mode: 'serial'});

    // create instance of Page to be used within tests
    let page;

    // before all hook
    test.beforeAll(async({browser}) => {
        page = await browser.newPage();
    })

    // after all hook
    test.afterAll(async() => {
        await page.close();
    })

    // first test - DO NOT PASS PAGE into function
    test('first test', async() => {
        await page.goto('https://playwright.dev/');
        await page.pause();
    })

    //second test
    test('second test', async() => {
        await page.getByText('Get Started').click();
    })
})