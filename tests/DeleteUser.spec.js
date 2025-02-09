const { test,expect}=require('@playwright/test');
const { BaseFile, Consent, LoginUser } = require('../pages/baseFile');
const DeleteAccount = require('../pages/DeleteUser');
let baseFile, If_consentPopup_should_be_appeared, user_Should_be_able_to_login_successfully, DeleteUser;
test.beforeEach(async({page})=>{
    baseFile = new BaseFile(page);
    If_consentPopup_should_be_appeared = new Consent(page)
    user_Should_be_able_to_login_successfully = new LoginUser(page)
    DeleteUser = new DeleteAccount(page)
})
test('User should be able to check delete the member functionality', async({page})=>{
    await baseFile.User_should_be_navigate_to_URL();
    //await If_consentPopup_should_be_appeared.If_consentPopup_should_be_appeared();
    await user_Should_be_able_to_login_successfully.user_Should_be_able_to_login_successfully('nisthalodhi@gmail.com', 'test@123')
    await DeleteUser.User_should_Be_able_to_Delete_Account_Successfully()

})