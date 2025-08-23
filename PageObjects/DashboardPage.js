class DashboardPage {
    constructor(page) 
    {
        this.page = page; 
        this.productItem = page.locator("//div[@class='card-body']");
        this.addToCartButton = page.locator("//*[contains(text(),' Add To Cart')]");
        this.cartButton = page.locator("//button[@routerlink='/dashboard/cart']");
        this.signOutButton = page.locator("//button[contains(text(),'Sign Out')]");
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
    async ClickOnProduct(productName) 
    {
        const productCard = this.productItem.filter({ hasText: productName }).first();
        const addToCartBtn = productCard.getByRole('button', { name: 'Add To Cart' });
        await addToCartBtn.click();
        console.log("Clicked on product:", productName);
    }
    async ClickOnCart() 
    {
        const cartButton = await this.cartButton.click();        
        console.log("Clicked on Cart");
    }

    async signOut() 
    {
        await this.page.signOutButton.click();
        console.log("Clicked on Sign Out");
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = { DashboardPage }
