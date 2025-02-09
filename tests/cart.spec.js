const { test, expect } = require('@playwright/test');
const { BaseFile, Consent } = require('../pages/baseFile');
const Cart = require('../pages/cart');

let baseFile, If_consentPopup_should_be_appeared, cart;

test.describe('Validate empty cart message and link', () => {
  test.beforeEach(async ({ page }) => {
    baseFile = new BaseFile(page);
    If_consentPopup_should_be_appeared = new Consent(page);
    cart = new Cart(page);
    await baseFile.User_should_be_navigate_to_URL();  // Navigate to the base page before each test
  });

  test('To validate cart is empty', async ({ page }) => {
    await cart.cartEmpty();  // Ensure that cart is empty
  });
  test('User should be able to navigate the home page', async({page})=>{
    await cart.cartEmpty();
    await cart.hereLink();
  })
  test('User should be able to delete the product from cart', async({page})=>{
    await cart.deleteProduct();
  })
});