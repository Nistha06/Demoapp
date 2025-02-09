const{test, expect}=require('@playwright/test');
const { BaseFile, Consent } = require('../pages/baseFile');
const Subscription = require('../pages/subscription');

let baseFile, consentPopup, subscription;
test.beforeEach(async({page})=>{
    baseFile = new BaseFile(page)
    consentPopup = new Consent(page)
    subscription = new Subscription(page)
    
})
test('Email should be subscribed', async({page})=>{
    await baseFile.User_should_be_navigate_to_URL();
    //await baseFile.consentPopup();
    await subscription.subscribed('nisthalodhi@gmail.com');
})