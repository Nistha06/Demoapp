const{test,expect}=require('@playwright/test');
const { BaseFile, LoginUser, InvalidUserName } = require('../pages/baseFile');
let baseFile, login,user_Should_be_able_to_login_successfully,user_Should_not_be_able_to_login_successfully;
test.describe('To check the Login functionality for valid and non valid credential', async()=>{
    test.beforeEach(async ({page})=>{
        baseFile =new BaseFile(page)
        user_Should_be_able_to_login_successfully=new LoginUser(page)
        user_Should_not_be_able_to_login_successfully=new InvalidUserName(page)
         })
    test('Login with valid credentials', async({page})=>{
        await baseFile.User_should_be_navigate_to_URL()
        await user_Should_be_able_to_login_successfully.user_Should_be_able_to_login_successfully('nisthalodhi@gmail.com','test@123')
    })
    test('Login with invalid credentials', async({page})=>{
        await baseFile.User_should_be_navigate_to_URL();
        await user_Should_not_be_able_to_login_successfully.user_Should_not_be_able_to_login_successfully('nisthalodhi23232@gmail.com','test@123')
        
    })
})