const{expect}=require('@playwright/test')
class AddProduct{
    constructor(page){
        this.page=page
        this.productAdd='//*[@href="/products"]'
        this.allProduct='.col-sm-4';
        this.addproduct='//a[@class="btn btn-default add-to-cart"]'
        this.cart='(//a[@href="/view_cart"])[1]'
        this.added='(//p[@class="text-center"])[1]'
        this.item='.cart_product'
        this.description='.cart_description'
        this.price='.cart_price'
        this.quantity='.cart_quantity'
        this.proceed='.btn.btn-default.check_out';
        this.deliveryAddress='#address_delivery'
        this.billingAddress='#address_invoice'
        this.cartInfo='#cart_info'
        this.placeOrder='//a[@href="/payment"]'
    }
    async productpurchase(){
        await this.page.click(this.productAdd)
        await this.page.waitForSelector(this.allProduct, { timeout: 60000, state: 'visible' });
        const productCount = await this.page.locator(this.allProduct).count();
        console.log(`Found ${productCount} products.`);
        // Loop through and interact with each product (starting from index 2 in this example)
        if (productCount > 2) {
        const productLocator = this.page.locator(this.allProduct).nth(2);  // Select the 3rd product (index 2)
        await productLocator.waitFor({ state: 'visible', timeout: 60000 });  // Wait for the 3rd product to be visible
        // Click on the selected product
        await productLocator.click();
        } else {
         console.log('Not enough products available');
       }
        await this.page.click(this.addproduct)
        const add=await this.page.locator(this.added)
        await expect(add).toContainText('Your product has been added to cart.')
        await this.page.click(this.cart)
        await this.page.locator(this.item)
        await expect(this.page.locator(this.item)).toBeVisible();
        await this.page.locator(this.description)
        await expect(this.page.locator(this.description)).toBeVisible();
        await this.page.locator(this.price)
        await expect(this.page.locator(this.price)).toBeVisible()
        await this.page.locator(this.quantity)
        await expect(this.page.locator(this.quantity)).toBeVisible()
        await this.page.locator(this.proceed);
        await expect(this.page.locator(this.proceed)).toBeVisible();
        await this.page.click(this.proceed)
        await this.page.locator(this.deliveryAddress)
        await expect(this.page.locator(this.deliveryAddress)).toBeVisible()
        await this.page.locator(this.billingAddress)
        await expect(this.page.locator(this.billingAddress)).toBeVisible()
        await this.page.click(this.placeOrder)
   }
}
module.exports=AddProduct