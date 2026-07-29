import { expect, test } from '../../src/fixtures/test.fixture';
import { users } from '../../test-data/users';

const productName = 'Sauce Labs Backpack';

test.describe('SauceDemo cart', () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
  });

  test('user can add a product to the cart', async ({
    inventoryPage,
    cartPage,
  }) => {
    await inventoryPage.addProductToCart(productName);

    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.openCart();
    await cartPage.expectProduct(productName);
  });

  test('user can remove a product from the cart', async ({
    inventoryPage,
    cartPage,
  }) => {
    await inventoryPage.addProductToCart(productName);
    await inventoryPage.openCart();

    await cartPage.removeProduct(productName);

    await cartPage.expectProductRemoved(productName);
  });
});
