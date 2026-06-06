# SauceDemo Checkout - E2E Test Automation

End-to-end test automation for the full purchase flow on [SauceDemo](https://www.saucedemo.com/), built with Playwright and TypeScript.
The project covers a complete user journey - login → add to cart → checkout → order confirmation - and demonstrates a scalable test architecture using the Page Object Model, custom fixtures, and externalized test data.

## Tech Stack

- **TypeScript**

- **Playwright Test**

- Page Object Model (POM)

- Custom fixtures (`test.extend`)
---

## What This Covers

A single end-to-end scenario that walks through the entire checkout flow with assertions at every step:

1. Log in as a standard user

2. Add a product to the cart (located by product name)

3. Verify the product appears in the cart

4. Proceed to checkout and fill in customer information

5. Verify the order total is present

6. Finish the order and confirm the success message

Each step is verified - the test validates state along the way, not just the final result.

---

## Architecture Highlights

- Page Object Model - selectors and page actions are encapsulated in six page objects, one per screen in the flow.

- Custom fixtures - page objects are provided to tests via `test.extend`, so they are not instantiated manually in every test. Only the fixtures a test requests are created.

- Externalized test data - users, customer details, and product names live in a dedicated data module, not hardcoded in tests.

- Separation of concerns - page objects expose actions and element getters; all assertions stay in the tests.

- Resilient selectors - prefers `data-test` attributes and roles over brittle CSS where possible.

---

## Project Structure

```
data/

  testData.ts                 # users, customer info, product names

fixtures/

  pages.fixture.ts            # custom Playwright fixtures for page objects

pages/

  LoginPage.ts

  InventoryPage.ts

  CartPage.ts

  CheckoutStepOnePage.ts

  CheckoutStepTwoPage.ts

  CheckoutCompletePage.ts

tests/

  checkout.spec.ts            # end-to-end checkout scenario

playwright.config.ts          # base URL, trace, project config

```

---

## Getting Started

```bash

# install dependencies

npm install

# install Playwright browsers

npx playwright install

# run all tests

npx playwright test

# run in interactive UI mode

npx playwright test --ui

# open the HTML report

npx playwright show-report

```
---

## Why This Project

Built as a portfolio piece to demonstrate a maintainable, team-style test setup rather than a one-off script. The focus is on architecture: reusable page objects, fixture-based dependency injection, externalized data, and assertions placed where they belong.

## Notes

- Test credentials are publicly provided by SauceDemo and are safe to use.

- Traces are captured on first retry to simplify debugging of failed runs.
