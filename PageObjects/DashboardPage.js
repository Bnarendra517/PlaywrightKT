class DashboardPage {
    constructor(page) 
    {
        this.page = page; 
    }

    async verifyTitle(expectedTitle) 
    {
        const actualTitle = await this.page.title();
        console.log("Actual page title:", actualTitle);
        console.log("Expected page title:", expectedTitle);
        if (actualTitle === expectedTitle) 
        {
            console.log('PASS: Title matched');
        } 
        else 
        {
            console.error(`FAIL: Expected "${expectedTitle}", got "${actualTitle}"`);
        }
    }
}
module.exports = { DashboardPage }
