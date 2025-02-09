const {expect}=require('@playwright/test')
class Contactus{
    constructor(page)
    {
        this.page=page;
        this.contact='//a[@href="/contact_us"]';
        this.getintouch='(//h2[@class="title text-center"])[2]'
        this.name='//*[@name="name"]';
        this.email='//*[@name="email"]';
        this.subject='//*[@name="subject"]';
        this.message='#message';
        this.file='//*[@name="upload_file"]';
        this.upload='//*[@type="file"]';
        this.submit='//*[@name="submit"]'
        this.success='.status.asuccesslert.alert-';
    }
 
async contactde(name,email,subject,message)
    {
       await this.page.click(this.contact);
       const get=await this.page.locator(this.getintouch);
       await expect(get).toBeVisible();
       await this.page.fill(this.name,name);
       await this.page.fill(this.email,email);
       await this.page.fill(this.subject,subject)
       await this.page.fill(this.message,message);
       const fileInput = await this.page.locator(this.file); // Ensure `this.file` points to the file input
       await fileInput.setInputFiles('C:/Users/DELL/nistha/New folder/Automation tsting.docx');
       await this.page.click(this.submit);
       //await this.page.waitForSelector('this.success', { visible: true, timeout: 12000 }); 
       const successLocator = await this.page.locator('this.success');
       await expect(successLocator).toBeTruthy();
    }
}
module.exports=Contactus
