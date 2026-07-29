# AI Prompts Used

## Prompt 1 — Framework design

Design a Playwright and TypeScript test automation framework created from scratch for a take-home exercise. It must test SauceDemo through the UI and JSONPlaceholder through its API. Use page objects, typed fixtures, reusable API clients, environment configuration, test data separation, HTML and JUnit reporting, and separate UI and API Playwright projects. Keep the scope appropriate for approximately four hours.

## Prompt 2 — UI coverage

Generate concise, high-value SauceDemo tests for successful login, locked-user validation, invalid credentials, adding and removing a product, and completing checkout. Prefer stable data-test selectors, avoid hard waits, and keep assertions in the tests or clear page-object expectation methods.

## Prompt 3 — API coverage

Generate Playwright API tests for JSONPlaceholder posts covering collection retrieval, single-resource retrieval, a missing resource, create, full update, and delete. Account for the fact that JSONPlaceholder simulates writes instead of persisting them.

## Prompt 4 — Review

Review the generated framework as a senior SDET. Identify weak assertions, duplicated setup, brittle selectors, unnecessary abstractions, hidden waits, type-safety gaps, and behavior that incorrectly assumes JSONPlaceholder persists write operations.
