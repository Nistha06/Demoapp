const {expect}= require('@playwright/test')
class BaseFile{
    constructor(page){
        this.page=page;
    }
    async User_should_be_navigate_to_URL(){
        await this.page.goto('https://www.automationexercise.com/', {timeout: 60000});
    }
}
class Consent extends BaseFile{
    constructor(page){
        super(page);
        this.consent='(//*[@class="fc-button-label"])[1]';  
    }

    async If_consentPopup_should_be_appeared() {
        try {
            // Wait for the consent button to appear
            await this.page.waitForSelector(this.consent, { state: 'visible', timeout: 5000 });
            await this.page.click(this.consent);
        } catch (error) {
            console.log('Consent popup did not appear:', error);
        }
    }
}


    class LoginUser extends Consent{ 
        constructor(page){
            super(page)
            this.loginuser='//a[@href="/login"]'
            this.loginusername='//*[@data-qa="login-email"]'
            this.loginpassword='//*[@data-qa="login-password"]'
            this.loginbutton='//*[@data-qa="login-button"]'
            this.errormess='//p[@style="color: red;"]'
        }
        async user_Should_be_able_to_login_successfully(loginusername,loginpassword){
            await this.page.waitForSelector(this.loginuser, { visible: true, timeout: 60000 })
            await this.page.click(this.loginuser)
            await this.page.waitForSelector(this.loginusername, { visible: true, timeout: 60000 });
            await this.page.waitForSelector(this.loginpassword, { visible: true, timeout: 60000 });
            await this.page.fill(this.loginusername,loginusername)
            await this.page.fill(this.loginpassword,loginpassword)
            await this.page.click(this.loginbutton)
        }

    }
    class InvalidUserName extends LoginUser{
        async user_Should_not_be_able_to_login_successfully(loginusername,loginpassword)
        { 
            await this.page.waitForSelector(this.loginuser, { visible: true, timeout: 60000 })
            await this.page.click(this.loginuser)
            await this.page.waitForSelector(this.loginusername, { visible: true, timeout: 60000 });
            await this.page.waitForSelector(this.loginpassword, { visible: true, timeout: 60000 });
            await this.page.fill(this.loginusername,loginusername)
            await this.page.fill(this.loginpassword,loginpassword)
            await this.page.click(this.loginbutton);
            const unauthorise=await this.page.locator(this.errormess)
            const errormesaage=await unauthorise.textContent()
            await expect(errormesaage.trim()).toBe('Your email or password is incorrect!');
    
        } 
    }
        
module.exports={BaseFile, Consent,LoginUser, InvalidUserName}