const{test}=require('@playwright/test')
const {BaseFile,Consent, LoginUser} = require('../pages/baseFile')
const SearchProduct = require('../pages/search')
let baseFile, user_Should_be_able_to_login_successfully,search,consentPopup;
test.beforeEach(async({page})=>{
    baseFile=new BaseFile(page);
    //consentPopup =new Consent(page);
    user_Should_be_able_to_login_successfully = new LoginUser(page)
    search =new SearchProduct(page);
});
test('To check the search product and delete product functionality', async({page})=>{
    await baseFile.User_should_be_navigate_to_URL()
    await user_Should_be_able_to_login_successfully.user_Should_be_able_to_login_successfully('nisthalodhi@gmail.com','test@123')
    await search.searchproduct()
})
