# UI Automated E2E Test suite for Paycoinq

This is a E2E Test Automation suite using [Playwright](https://playwright.dev) as a testing tool and TypeScript as a scripting Language.

The website used for this assignment is a public website by [Saucelabs](https://www.saucedemo.com/)

## Testing Strategy 

- Page Object Model is used throughout the test suite.
- TypeScript is used as a Scripting Language throughout the suite.
- `Playwright` is used as a testing tool.
- Tests are `parametrized` in nature.
- `ENUMS` are used where-ever and when-ever required.
- `HTML` reports are logged for all the test runs.
- `Screenshot` is captured at every failed test.

## Prerequisites 

Following should be available on your machine 
```

    - Node.js 
    - npm
    - playwright

```
## How to run Tests

- Check that you are in the correct project directory.

To Run all Tests
```
npm run test
```

Run test by Tags
```

npx playwright test --grep @orderflow
npx playwright test --grep @authorization
npx playwright test --grep @feature 
```

## Test cases 

    1. Login (valid and invalid login)
    2. Sorting (sorting feature at main page)
    3. OrderPlacement and checking the flow

## Possible Bugs

    1. RESET App state does not return anything. On inspecting, even API call is did not happen.
    2. During Checkout, No checks for valid input is implemented. String can be passed in Zip Code while Numerics can be passed in Name.
    3. No warning or error message when you logout from the website. You can even logout directly from the payment/cart page.


