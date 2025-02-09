const{test,expect}=require('@playwright/test');
const AddProduct = require('../pages/product');
const { BaseFile, LoginUser } = require('../pages/baseFile');

let baseFile,user_Should_be_able_to_login_successfully,product
test.beforeEach(async({page})=>{
    baseFile = new BaseFile(page)
    user_Should_be_able_to_login_successfully = new LoginUser(page)
    product=new AddProduct(page)
})
test('Purchasing the product of any category',async({page})=>{
        await baseFile.User_should_be_navigate_to_URL()
        await user_Should_be_able_to_login_successfully.user_Should_be_able_to_login_successfully('nisthalodhi@gmail.com','test@123')
        await product.productpurchase()
})