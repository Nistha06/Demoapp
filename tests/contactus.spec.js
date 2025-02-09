const {test,expect}=require('@playwright/test')
const Contactus =require('../pages/contactus');
const { LoginUser, BaseFile } = require('../pages/baseFile');
let contactus,baseFile,user_Should_be_able_to_login_successfully;
test.describe('Check the contactus functionality', async()=>{
    test.beforeEach(async({page})=>{
        baseFile =new BaseFile(page)
        user_Should_be_able_to_login_successfully=new LoginUser(page)
        contactus = new Contactus(page)
        
    })
    test('User should be able to contact us successfully', async({page})=>{
            await baseFile.User_should_be_navigate_to_URL()
            await user_Should_be_able_to_login_successfully.user_Should_be_able_to_login_successfully('nisthalodhi@gmail.com','test@123')
            await contactus.contactde('annu','nisthalodhi@gmail.com','Testing','Automation Testing')
        })
})