import { Page, Locator } from "@playwright/test";

export class CheckoutCompletePage {
    readonly page: Page;
    readonly successHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successHeader = page.locator('.complete-header'); // "Thank you for your order!"
    }
}