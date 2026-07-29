import { expect, type Locator, type Page } from '@playwright/test';

export class CartPage {
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  private cartItem(productName: string): Locator {
    return this.page.locator('.cart_item').filter({ hasText: productName });
  }

  async expectProduct(productName: string): Promise<void> {
    await expect(this.cartItem(productName)).toBeVisible();
  }

  async removeProduct(productName: string): Promise<void> {
    await this.cartItem(productName)
      .getByRole('button', { name: 'Remove' })
      .click();
  }

  async expectProductRemoved(productName: string): Promise<void> {
    await expect(this.cartItem(productName)).toHaveCount(0);
  }

  async startCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
