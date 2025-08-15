class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.userEmail=page.locator("//input[@id='userEmail']");
        this.userPassword=page.locator("//input[@id='userPassword']");
        this.signInButton=page.locator("//input[@id='login']");
    }
    async LaunchURL()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }

    async validLogin(username,password)
    {
        await this.userEmail.fill(username);
        await this.userPassword.fill(password);
        await this.signInButton.click();
    }
}
module.exports = {LoginPage}