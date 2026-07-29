import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  private product(productName: string): Locator {
    return this.page
      .locator('[data-test="inventory-item"]')
      .filter({ hasText: productName });
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.title).toHaveText('Products');
  }

  async addProductToCart(productName: string): Promise<void> {
    await this.product(productName)
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async removeProduct(productName: string): Promise<void> {
    await this.product(productName)
      .getByRole('button', { name: 'Remove' })
      .click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }
}
