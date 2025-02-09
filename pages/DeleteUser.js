const{expect}=require('@playwright/test')
class DeleteAccount{
    constructor(page){
        this.page=page
        this.deleteaccount='//*[@href="/delete_account"]'
        this.deleted='//h2[@class="title text-center"]/b[text()="Account Deleted!"]'
        this.p1='//p[contains(text(), "Your account has")]'
        this.p2='//p[contains(text(), "You can cre")]'
        this.deletebutton='//*[@data-qa="continue-button"]'
    }
    async User_should_Be_able_to_Delete_Account_Successfully(){
        await this.page.click(this.deleteaccount)
        const deleting=await this.page.locator(this.deleted)
        expect(deleting).toHaveText('Account Deleted!')
        const para1 = await this.page.locator(this.p1)
        expect(para1).toHaveText('Your account has been permanently deleted!')
        const para2 =await this.page.locator(this.p2)
        expect(para2).toHaveText('You can create new account to take advantage of member privileges to enhance your online shopping experience with us.')
    }
}module.exports=DeleteAccount