// Utility function to generate a random number with a given number of digits
//const {PaymentPage, getRandomNumber} = require('../Utilities/RandomNumber');
class PaymentPage 
{
    constructor(page) 
    {
        this.page = page;
        this.creditcardnumber = page.locator("//*[text()='Credit Card Number ']/following-sibling::input");
        this.cvvInput = page.locator("//*[text()='CVV Code ']/following-sibling::input");
        this.nameOnCardInput = page.locator("//*[text()='Name on Card ']/following-sibling::input");
        this.applyCouponInput = page.locator("//*[text()='Coupon Code ']/following-sibling::input");
        this.countryInput = page.locator("//input[@placeholder='Select Country']");
        this.placeOrderButton = page.locator("//a[contains(text(),'Place Order ')]");
    }

    async creditCardNumber(creditCardNumber) 
    {        
        await this.creditcardnumber.fill(creditCardNumber);
        console.log("Filled Credit Card Number:", creditCardNumber);
    }
    async cvv(cvv) 
    {
        await this.cvvInput.fill(cvv);
        console.log("Filled CVV:", cvv);
    }
    async nameOnCard(nameOnCard) 
    {
        await this.nameOnCardInput.fill(nameOnCard);
        console.log("Filled Name on Card:", nameOnCard);
    } 
    async country(country) 
    {   
        await this.countryInput.pressSequentially(country,{ delay: 100 });
        console.log("Filled Country:", country);
        await this.page.waitForTimeout(2000); // Wait for the dropdown to populate
        await this.page.waitForSelector("//section[@class='ta-results list-group ng-star-inserted']/button", { state: 'visible' });
        const fromcountry=await this.page.$$("//section[contains(@class,'ta-results')]//button");

        for (let i = 0; i < fromcountry.length; i++) 
        {
            const countryText = await fromcountry[i].textContent();
            console.log("Country in dropdown:", countryText);
            if (countryText.trim()===country) 
            {
                await fromcountry[i].click();
                console.log("Selected country:", countryText);
                await this.page.keyboard.press('Escape')
                break;
            }

        }
    }
    async placeOrder() 
    {
        await this.page.waitForTimeout(5000); // Wait for the selection to be processed
        await this.placeOrderButton.click();
        console.log("Clicked on Place Order");
        await this.page.waitForTimeout(5000); // Wait for the order to be placed
    }
}
module.exports = { PaymentPage };