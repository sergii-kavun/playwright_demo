export class pageSauce {

    // create constructor which will use Page from tests
    constructor(page) {
        this.page = page;

        // creation locators
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    // create reusable parametraised functions to do action on locators

    async navigateToLoginPage(url) {
        await this.page.goto(url);
    }
    async enterUsername(username){
        await this.username.click();
        await this.username.fill(username);
    }

    async enterPassword(password){
        await this.password.click();
        await this.password.fill(password);
    }

    async login(){
        await this.loginButton.click();
    }

    // more generic function to login
    async login_successful(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }


}