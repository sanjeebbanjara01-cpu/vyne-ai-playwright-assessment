import { test } from '../../src/fixtures/test.fixture';
import { checkoutCustomer } from '../../test-data/checkout';
import { users } from '../../test-data/users';

const productName = 'Sauce Labs Backpack';

test('standard user can complete checkout', async ({
  loginPage,
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  await test.step('Log in and add a product', async () => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectLoaded();
    await inventoryPage.addProductToCart(productName);
  });

  await test.step('Complete checkout', async () => {
    await inventoryPage.openCart();
    await cartPage.expectProduct(productName);
    await cartPage.startCheckout();
    await checkoutPage.enterCustomerInformation(checkoutCustomer);
    await checkoutPage.finish();
  });

  await test.step('Verify order confirmation', async () => {
    await checkoutPage.expectOrderComplete();
  });
});
