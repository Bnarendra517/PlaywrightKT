class OrderConfirmationPage {
    constructor(page) {
        this.page = page;
        this.orderConfirmationMessage = page.locator("//h1[contains(text(),'Thank you for your order!')]");
        this.orderHistoryPageLink = page.locator("//*[contains(text(),'You can see all the Orders in ')]//following-sibling::label");

    }

    async verifyOrderConfirmation() 
    {
        // Wait for the order confirmation message to be visible
        await expect(this.orderConfirmationMessage).toHaveText(/Thank you for your order!/);        
        console.log("Order placed successfully and confirmation message displayed.");
        const actualorderid=this.page.locator("//*[@class='ng-star-inserted']/td/label").textContent();     
        console.log("Order ID:", actualorderid);
        expect(actualorderid).toBeTruthy(); // Ensure order ID is not empty
        await this.orderHistoryPageLink.click();


    }

}

module.exports = {OrderConfirmationPage}