import { Page, Locator } from "@playwright/test";

export class CheckoutStepTwoPage {
    readonly page: Page;
    readonly finishButton: Locator;
    readonly totalLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('[data-test="finish"]');
        this.totalLabel = page.locator('.summary_total_label'); // строка "Total: $XX.XX"
    }

    async finish() {
        await this.finishButton.click();
    }
}