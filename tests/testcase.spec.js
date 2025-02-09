const{test,expect}=require('@playwright/test');

const TestCase = require('../pages/testcase');
const { BaseFile } = require('../pages/baseFile');
let baseFile,testcase;
test.beforeEach(async ({page})=>{
   baseFile =new BaseFile(page)
    testcase=new TestCase(page)
})
test('To check the number of test case',async({page})=>{
    await baseFile.User_should_be_navigate_to_URL()
    await testcase.testclick();
})