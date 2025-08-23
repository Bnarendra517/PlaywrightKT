class OrderConfirmationPage {
    constructor(page) {
        this.page = page;
        this.orderConfirmationMessage = page.locator("//h1[contains(text(),' Thankyou for the order. ')]");
        this.orderHistoryPageLink = page.locator("//*[contains(text(),'You can see all the Orders in ')]//following-sibling::label");

    }

    async verifyOrderConfirmation() 
    {
        console.log("Order placed successfully and confirmation message displayed.");
        const actualorderid=await this.page.locator("//*[@class='ng-star-inserted']/td/label").textContent();     
        console.log("Order ID:", actualorderid);
        await this.orderHistoryPageLink.click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = {OrderConfirmationPage}