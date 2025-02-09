const{expect}=require('@playwright/test')
class SearchProduct{
    constructor(page)
    {
        this.page=page
        this.productAdd='//*[@href="/products"]'
        this.allProduct='//h2[@class="title text-center" and text()="All Products"]'
        this.searchProduct='//h2[@class="title text-center" and text()="Searched Products"]'
        this.search='//input[@type="text"]'
        this.searchbtn='#submit_search'

    }
    async searchproduct(){
        await this.page.click(this.productAdd)
        const aProduct=await this.page.locator(this.allProduct)
        await expect(aProduct).toBeVisible()
        await this.page.fill(this.search,'top')
        await this.page.waitForSelector(this.searchbtn, { state: 'visible' });
        await this.page.click(this.searchbtn)
        // const sProduct= await this.page.locator(this.searchProduct)
        // await this.page.waitForSelector(this.searchProduct, { state: 'visible', timeout: 60000  });
        // await expect(sProduct).toBeVisible()
}
}
module.exports=SearchProduct