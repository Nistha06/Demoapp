const {expect}=require('@playwright/test')
class Cart
{
    constructor(page){
        this.page=page;
        this.cart='(//a[@href="/view_cart"])[1]'
        this.emptyCart='#empty_cart'
        this.here='//p//a[@href="/products"]'
        this.viewProduct='//a[@href="/product_details/6"]'
        this.quantity='#quantity'
        this.addCart='//button[@type="button"]//i[@class="fa fa-shopping-cart"]'
        this.continue='.btn.btn-success.close-modal.btn-block'
        this.checkout='.btn.btn-default.check_out'
        this.login='//p//a[@href="/login"]'
        this.delete='.cart_quantity_delete'
    }
    async cartEmpty(){
        await this.page.click(this.cart)
        const empty =await this.page.locator(this.emptyCart)
        await expect(empty).toHaveText('Cart is empty! Click here to buy products.');
        console.log('Cart is empty! Click here to buy products.')
    }
    async hereLink(){
        console.log('Move to home page')
        await this.page.click(this.here)
        await this.page.click(this.viewProduct)
        await this.page.fill(this.quantity, '2')
        await this.page.click(this.addCart)
        await this.page.click(this.continue, { timeout: 60000 });
        await this.page.click(this.cart);
        await this.page.click(this.checkout)
        await this.page.click(this.login)
    }
    async deleteProduct(){
        await this.page.click(this.viewProduct)
        await this.page.fill(this.quantity, '2')
        await this.page.click(this.addCart)
        await this.page.click(this.continue, { timeout: 60000 });
        await this.page.click(this.cart);
        await this.page.click(this.delete);
    }

}
module.exports=Cart