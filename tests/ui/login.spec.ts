import { expect, test } from '../../src/fixtures/test.fixture';
import { users } from '../../test-data/users';

test.describe('SauceDemo login', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.open();
  });

  test('standard user can log in successfully', async ({
    loginPage,
    inventoryPage,
  }) => {
    await loginPage.login(users.standard.username, users.standard.password);

    await inventoryPage.expectLoaded();
  });

  test('locked-out user receives the correct error', async ({ loginPage }) => {
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);

    await expect(loginPage.errorMessage).toContainText(
      'Sorry, this user has been locked out.',
    );
  });

  test('invalid credentials are rejected', async ({ loginPage }) => {
    await loginPage.login(users.invalid.username, users.invalid.password);

    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match',
    );
  });
});
