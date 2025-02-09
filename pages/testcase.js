const{expect}=require('@playwright/test')
class TestCase{
    constructor(page){
        this.page=page;
        this.test='(//a[@href="/test_cases"])[1]'
        this.testsearch='(//*[@class="google-anno-t"])[1]'
        this.close='#hd-close-button';
        this.testcase='//*[@data-toggle="collapse"]'
        // this.test1='//*[@href="#collapse1"]'
        // this.test2='//*[@href="#collapse2"]'
        // this.test3='//*[@href="#collapse3"]'
        // this.test4='//*[@href="#collapse4"]'
        // this.test5='//*[@href="#collapse5"]'
        // this.test6='//*[@href="#collapse6"]'
        // this.test7='//*[@href="#collapse7"]'
        // this.test8='//*[@href="#collapse8"]'
        // this.test9='//*[@href="#collapse9"]'
        // this.test10='//*[@href="#collapse10"]'
        // this.test11='//*[@href="#collapse11"]'
        // this.test12='//*[@href="#collapse12"]'
        // this.test13='//*[@href="#collapse13"]'
        // this.test14='//*[@href="#collapse14"]'
        // this.test15='//*[@href="#collapse15"]'
        // this.test16='//*[@href="#collapse16"]'
        // this.test17='//*[@href="#collapse17"]'

    }
    async testclick(){
     await this.page.click(this.test)
     for (let i = 1; i <= 17; i++) {
        const xpath = `//*[@data-toggle="collapse"][${i}]`;  // Adjust the XPath based on your HTML structure
        console.log(`Waiting for XPath: ${xpath}`);
        await this.page.waitForSelector(xpath, { state: 'visible', timeout: 50000 });
        console.log(`Clicking element with XPath: ${xpath}`);
        await this.page.click(xpath);
    }
    
    //  await this.page.click(this.test1)
    //  await this.page.click(this.test2)
    //  await this.page.click(this.test3)
    //  await this.page.click(this.test4)
    //  await this.page.click(this.test5)
    //  await this.page.click(this.test6)
    //  await this.page.click(this.test7)
    //  await this.page.click(this.test8)
    //  await this.page.click(this.test9)
    //  await this.page.click(this.test10)
    //  await this.page.click(this.test11)
    //  await this.page.click(this.test12)
    //  await this.page.click(this.test13)
    //  await this.page.click(this.test14)
    //  await this.page.click(this.test15)
    //  await this.page.click(this.test16)
    //  await this.page.click(this.test17)


    }
}
module.exports=TestCase