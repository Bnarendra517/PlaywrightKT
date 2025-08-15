import {test,expect} from '@playwright/test';
const {LoginPage}=require('../PageObjects/LoginPage');
const {DashboardPage}=require('../PageObjects/DashBoardPage');
const {MyCartPage} = require('../PageObjects/MyCartPage');
const {PaymentPage} = require('../PageObjects/PaymentPage');
const {OrderConfirmationPage} = require('../PageObjects/OrderConfirmationPage');
const loginDataSet = JSON.parse(JSON.stringify(require('../TestData/LoginTestData.json')));
const dashboardDataSet = JSON.parse(JSON.stringify(require('../TestData/DashboardTestData.json')));

test('ClientAppPO', async ({ page }) => {

    //const username="narendra.balla@gmail.com";
    //const password="1234567";

    //Login Page
    const loginPageObj=new LoginPage(page);
    await loginPageObj.LaunchURL();
    await loginPageObj.validLogin(loginDataSet.username,loginDataSet.password);

    //Dashboard Page
    const dashboardPageObj=new DashboardPage(page);
    await dashboardPageObj.verifyTitle(dashboardDataSet.title);
    
    // Click on the Myntra Product
    await dashboardPageObj.ClickOnProduct(dashboardDataSet.productName); 
    await dashboardPageObj.ClickOnCart();

    //My Cart Page
    const myCartPageObj = new MyCartPage(page);
    await myCartPageObj.verifytheProductName(dashboardDataSet.productname);
    await myCartPageObj.checkout();

    //Payment Page
    const paymentPageObj=new PaymentPage(page);
    await paymentPageObj.creditCardNumber(dashboardDataSet.creditCardNumber);
    await paymentPageObj.cvv(dashboardDataSet.cvv);
    await paymentPageObj.nameOnCard(dashboardDataSet.NameOnCard);
    await paymentPageObj.country(dashboardDataSet.country);
    await paymentPageObj.placeOrder();

    // Verify the order confirmation
    const orderConfirmationPageObj = new OrderConfirmationPage(page);
    orderConfirmationPageObj.verifyOrderConfirmation();

            
    
    
});