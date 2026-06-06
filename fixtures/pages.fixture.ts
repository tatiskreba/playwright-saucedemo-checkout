import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutStepOnePage } from "../pages/CheckoutStepOnePage";
import { CheckoutStepTwoPage } from "../pages/CheckoutStepTwoPage";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";

type Pages = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    stepOne: CheckoutStepOnePage;
    stepTwo: CheckoutStepTwoPage;
    complete: CheckoutCompletePage;
};

export const test = base.extend<Pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    stepOne: async ({ page }, use) => {
        await use(new CheckoutStepOnePage(page));
    },
    stepTwo: async ({ page }, use) => {
        await use(new CheckoutStepTwoPage(page));
    },
    complete: async ({ page }, use) => {
        await use(new CheckoutCompletePage(page));
    },
});

export {expect} from "@playwright/test";