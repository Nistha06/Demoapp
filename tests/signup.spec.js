const{test,expect}=require('@playwright/test')
const Signup=require('../pages/signup');
const { BaseFile } = require('../pages/baseFile');
let baseFile,signup;
test.describe('Check the signup functionality', async()=>{
    test.beforeEach(async ({ page}) => {
       baseFile = new BaseFile(page)
        signup=new Signup(page);
        await baseFile.User_should_be_navigate_to_URL();
    });
    test('Signup with valid details', async({page})=>{
        //await baseFile.User_should_be_navigate_to_URL();
        await signup.sign('Nistha','nisthalodhi@gmail.com','test@123','Nistha','Singh','TCS','Address1','Address2','Uttar Pradesh','Noida','12345','918298121');

        console.log("Signup successfully!!")
    })
    test('Signup with already exists details', async({page})=>{
       // await baseFile.User_should_be_navigate_to_URL();
        await signup.error('Nistha','nisthalodhi@gmail.com');
        console.log("Getting error email aready exists:- Email Address already exist!")
    })
})
