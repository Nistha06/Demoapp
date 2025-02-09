const{test,expect}=require('@playwright/test');
const { BaseFile, Consent } = require('../pages/baseFile');
let baseFile,If_consentPopup_should_be_appeared;
test.beforeEach(async ({page})=>{
   baseFile =new BaseFile(page)
   If_consentPopup_should_be_appeared=new Consent(page)
})
test('Naviagte to the homepage', async({page})=>{
    await baseFile.User_should_be_navigate_to_URL();
    // const links=await page.$$('a');
    // for(const link of links){
    //     const linktext=await link.textContent();
    //     console.log(linktext)
    // }
    await If_consentPopup_should_be_appeared.If_consentPopup_should_be_appeared()
    const product=await page.$$('//div[@class="col-sm-4"]//div//h2')
    const fifthProduct = product[4];
    const productName = await fifthProduct.textContent();
    console.log('5th Product:', productName);
})