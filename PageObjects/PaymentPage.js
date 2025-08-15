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
        this.countryInput = page.locator("//div[@class='form-group']");
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
        await this.countryInput.fill(country);
        console.log("Filled Country:", country);
        await this.page.waitforselector("//section[@class='ta-results list-group ng-star-inserted']/button");
        const fromcountry=await this.page.$$("//section[@class='ta-results list-group ng-star-inserted']/button");
        for (let i = 0; i < fromcountry.length; i++) 
        {
            const countryText = await fromcountry[i].textContent();
            console.log("Country in dropdown:", countryText);
        }
        

    }


}
module.exports = { PaymentPage };