class Subscription{
    constructor(page){
        this.page=page;
        this.subscribe='#subscribe'
        this.subscribeemail='#susbscribe_email'
    }
    async subscribed(subscribeemail)
    {
        await this.page.fill(this.subscribeemail,subscribeemail)
        await this.page.waitForSelector(this.subscribe, { visible: true, timeout: 60000 });
        const subscribeButton = await this.page.$(this.subscribe);//returns the element matching the this.subscribe selector.
        await subscribeButton.scrollIntoViewIfNeeded();//scrollIntoViewIfNeeded() will scroll the page to make it visible. If it's already visible, it does nothing.
        await this.page.click(this.subscribe);
        
    }
}
module.exports=Subscription