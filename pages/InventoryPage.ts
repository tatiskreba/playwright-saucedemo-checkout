import { Page, Locator } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly cartlink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator ('.title');
        this.cartlink = page.locator ('.shopping_cart_link');
    }

    async addItemToCart(itemName: string) {
        const item = this.page.locator('.inventory_item', { hasText: itemName });
        await item.getByRole('button', { name: 'Add to cart' }).click();
    }

    async goToCart() {
        await this.cartlink.click();
    }
}
