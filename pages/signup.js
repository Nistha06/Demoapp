const { expect } = require('@playwright/test');
class Signup{
    constructor(page){
        this.page=page;
        this.loginuser="//a[@href='/login']";
        this.name='//*[@name="name"]';
        this.email='//*[@data-qa="signup-email"]';
        this.submit='//*[@data-qa="signup-button"]';
        this.gender='#id_gender2';
        this.password='//*[@type="password"]';
        this.days='#days';
        this.month='#months';
        this.year='#years';
        this.firstname='#first_name';
        this.lastname='#last_name';
        this.company='#company';
        this.add1='#address1';
        this.add2='#address2';
        this.country='#country'
        this.state='#state';
        this.city='#city';
        this.zipcode='#zipcode';
        this.mobile='#mobile_number';
        this.createaccount='//*[@data-qa="create-account"]';
        this.errormsg='//p[@style="color: red;"]';
    }
    async sign(name,email,password,firstname,lastname,company,add1,add2,state,city,zipcode,mobile){
        await this.page.click(this.loginuser);
        await this.page.fill(this.name,name);
        await this.page.fill(this.email,email);
        await this.page.click(this.submit);
        await this.page.check(this.gender);
        await this.page.fill(this.password,password);
        await this.page.selectOption(this.days, { value: '6' });
        await this.page.selectOption(this.month, {value: '10'});
        await this.page.selectOption(this.year, {value: '1995'});
        await this.page.fill(this.firstname,firstname);
        await this.page.fill(this.lastname, lastname);
        await this.page.fill(this.company,company);
        await this.page.fill(this.add1, add1);
        await this.page.fill(this.add2,add2);
        await this.page.selectOption(this.country,{ value: 'India'});
        await this.page.fill(this.state, state);
        await this.page.fill(this.city, city);
        await this.page.fill(this.zipcode,zipcode);
        await this.page.fill(this.mobile,mobile);
        await this.page.click(this.createaccount);
        
    }
    async error(name,email){
        await this.page.waitForSelector(this.loginuser, { visible: true, timeout: 60000 });
        await this.page.click(this.loginuser);
        await this.page.fill(this.name,name);
        await this.page.fill(this.email,email);
        await this.page.click(this.submit);
        const errormessage=await this.page.locator(this.errormsg);
        //await errormessage.waitFor({ state: 'visible', timeout: 60000 }); 
        const validationMsg = await errormessage.textContent();
        expect(validationMsg).toBe('Email Address already exist!');
    }

}
module.exports=Signup;