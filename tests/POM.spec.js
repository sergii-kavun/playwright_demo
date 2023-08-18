import {test, expect} from '@playwright/test';
import {pageSauce} from '../pages/page_sauce'; // to import POM

// demo for page object

test('Demo login with POM', async ({page}) => {

    // create new instance of POM page class
    const Login = new pageSauce(page);

    // Usage of POM functions

    await Login.navigateToLoginPage('https://www.saucedemo.com/');
    // await Login.enterUsername('standard_user');
    // await Login.enterPassword('secret_sauce');
    // await Login.login();
    await Login.login_successful('standard_user','secret_sauce');


})