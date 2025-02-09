const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/login');
const BaseFile = require('../pages/baseFile');
//const feature=loadFeature('./features/login.feature')
let loginPage, baseFile;
Given('I_am_on_the_login_page', async function(){
    baseFile=new BaseFile(page);
    await baseFile.navigate()
})
