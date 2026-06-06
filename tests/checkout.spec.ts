import { test, expect } from "../fixtures/pages.fixture";
import { USERS, CUSTOMER, PRODUCTS } from "../data/testData";

test.describe("Checkout flow", () => {

    test("Complete purchase end2end", async ({
        loginPage,
        inventoryPage,
        cartPage,
        stepOne,
        stepTwo,
        complete,
        }) => {
        const item = PRODUCTS.backpack;

        await loginPage.open();
        await loginPage.login(USERS.standard.username, USERS.standard.password);

        await expect(inventoryPage.title).toHaveText("Products");
        await inventoryPage.addItemToCart(item);
        await inventoryPage.goToCart();

        await expect(cartPage.getCartItemByName(item)).toBeVisible();
        await cartPage.checkout();

        await stepOne.fillInfo(CUSTOMER.firstName, CUSTOMER.lastName, CUSTOMER.postalCode);

        await expect(stepTwo.totalLabel).toContainText("Total: $");
        await stepTwo.finish();

        await expect(complete.successHeader).toHaveText("Thank you for your order!");
    });
});