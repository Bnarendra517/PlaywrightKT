import {test,expect} from '@playwright/test';
const {LoginPage}=require('../PageObjects/LoginPage');
const {DashboardPage}=require('../PageObjects/DashBoardPage');
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
    //await dashboardPageObj.navigateToProfile();
    
});