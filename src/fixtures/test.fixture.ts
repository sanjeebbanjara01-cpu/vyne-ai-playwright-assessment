import { test as base, expect } from '@playwright/test';
import { JsonPlaceholderClient } from '../api/json-placeholder.client';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';

interface AssessmentFixtures {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  jsonPlaceholderClient: JsonPlaceholderClient;
}

export const test = base.extend<AssessmentFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  jsonPlaceholderClient: async ({ request }, use) => {
    await use(new JsonPlaceholderClient(request));
  },
});

export { expect };
