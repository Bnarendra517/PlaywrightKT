class MyCartPage 
{
    constructor(page) 
    {
        this.page = page;
        this.productNameItem = page.locator("//div[@class='cartSection']//h3");
        this.checkoutButton = page.locator("//div[@class='subtotal cf ng-star-inserted']/ul/li/button");
    }

    async verifytheProductName(expectedProductName) 
    {
        const actualProductName = await this.productNameItem.textContent();
        console.log("Actual product name in cart:", actualProductName);
        console.log("Expected product name in cart:", expectedProductName);
        if (actualProductName === expectedProductName) 
        {
            console.log('PASS: Product name matched in cart');
        } 
        else 
        {
            console.error(`FAIL: Expected "${expectedProductName}", got "${actualProductName}"`);
        }   
    }

    async checkout() 
    {
        await this.checkoutButton.click();
    }
}

module.exports = {MyCartPage};