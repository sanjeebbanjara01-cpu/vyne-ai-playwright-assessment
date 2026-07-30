# AI Prompts Used

This document records the AI prompts that materially influenced the design, implementation, review, execution, and documentation of this assessment framework.

The prompts were created using the following inputs and constraints:

- Build the repository from scratch specifically for this exercise
- Test the SauceDemo web application
- Test the JSONPlaceholder API
- Use AI-assisted development
- Keep the work within an approximately four-hour timebox
- Prioritize technical decisions and evaluation of AI output over test quantity
- Document what AI generated, what required improvement, and what was changed

AI was used as an engineering assistant. All generated code and recommendations were reviewed before being included in the repository.

---

## Prompt 1 — Framework Architecture

**Goal:** Establish an appropriate framework design for both UI and API automation.

**Prompt:**

> Design a Playwright and TypeScript test automation framework created from scratch for a Senior QA Engineer take-home exercise.
>
> The framework must test SauceDemo through the browser and JSONPlaceholder through its REST API.
>
> Use a maintainable structure with page objects, typed fixtures, reusable API clients, environment configuration, centralized test data, separate UI and API test folders, and separate Playwright projects.
>
> Include HTML and JUnit reporting, screenshots, videos, and traces for failed tests.
>
> Keep the design practical and appropriate for an approximately four-hour exercise. Avoid unnecessary abstractions or overengineering.

**AI output used:**

- Initial repository structure
- Playwright project separation
- Page Object Model recommendation
- Typed fixture recommendation
- Reusable API-client recommendation
- Reporting and failure-artifact configuration

**Human review and refinements:**

- Limited browser coverage to Chromium to stay within the timebox
- Kept UI and API tests in the same Playwright framework
- Removed unnecessary placeholder utilities
- Chose a focused set of high-value scenarios instead of maximizing test count

---

## Prompt 2 — SauceDemo Scenario Selection

**Goal:** Select meaningful UI scenarios based on risk and business value.

**Prompt:**

> Identify a concise set of high-value SauceDemo scenarios for a Senior QA Engineer assessment.
>
> Include positive and negative authentication coverage and at least one complete shopping workflow.
>
> Prioritize scenarios that demonstrate business-risk coverage, reusable test design, stable assertions, and maintainable automation.
>
> Keep the number of tests reasonable for a four-hour exercise.

**AI output used:**

- Successful login
- Locked-out user validation
- Invalid credentials validation
- Add a product to the cart
- Remove a product from the cart
- Complete checkout and verify order confirmation

**Human review and refinements:**

- Selected only critical authentication and shopping flows
- Avoided creating repetitive tests for every product
- Focused on user-visible outcomes rather than implementation details

---

## Prompt 3 — SauceDemo Page Objects and UI Tests

**Goal:** Generate maintainable page objects and Playwright UI tests.

**Prompt:**

> Generate Playwright and TypeScript page objects and tests for the selected SauceDemo scenarios.
>
> Create separate page objects for login, inventory, cart, and checkout.
>
> Prefer SauceDemo `data-test` selectors whenever available.
>
> Do not use hard-coded waits.
>
> Use Playwright web-first assertions and allow Playwright auto-waiting to handle synchronization.
>
> Keep page objects focused on reusable page behavior. Keep test intent and business validation visible in the test files.
>
> Use typed fixtures to initialize the page objects.

**AI output used:**

- `login.page.ts`
- `inventory.page.ts`
- `cart.page.ts`
- `checkout.page.ts`
- Login tests
- Cart tests
- Checkout test
- Typed page-object fixtures

**Human review and refinements:**

- Reviewed every locator against SauceDemo
- Replaced potentially brittle selectors with `data-test` selectors
- Removed unnecessary methods and properties
- Strengthened URL and business-outcome assertions
- Kept the checkout test readable as an end-to-end workflow

---

## Prompt 4 — JSONPlaceholder API Client and Tests

**Goal:** Build reusable API automation for the JSONPlaceholder posts resource.

**Prompt:**

> Generate a reusable Playwright API client and API tests for the JSONPlaceholder `/posts` resource.
>
> Cover:
>
> - Retrieve all posts
> - Retrieve a post by ID
> - Retrieve a missing post and validate `404`
> - Create a post
> - Fully update a post
> - Delete a post
>
> Validate response status codes, content type where appropriate, and important response-body fields.
>
> Account for the fact that JSONPlaceholder simulates write operations and does not permanently persist POST, PUT, or DELETE changes.
>
> Use TypeScript interfaces for request payloads and avoid duplicating request logic directly in the tests.

**AI output used:**

- `json-placeholder.client.ts`
- Typed post payload
- GET collection test
- GET single-resource test
- Missing-resource test
- POST test
- PUT test
- DELETE test

**Human review and refinements:**

- Added response-shape assertions
- Added content-type validation for the collection response
- Added a negative `404` scenario
- Corrected write-operation expectations so tests do not assume persistence
- Kept request construction inside the reusable API client

---

## Prompt 5 — Fixtures, Configuration, and Reporting

**Goal:** Reduce repeated setup and support independent UI and API execution.

**Prompt:**

> Review the framework configuration and create typed Playwright fixtures for the page objects and JSONPlaceholder API client.
>
> Configure separate Playwright projects named `ui-chromium` and `api`.
>
> Give each project the correct base URL and test-matching pattern.
>
> Configure:
>
> - Parallel execution
> - CI retries
> - HTML reporting
> - JUnit reporting
> - Screenshots on failure
> - Videos on failure
> - Traces retained on failure
>
> Keep local execution simple and avoid adding dependencies that are not necessary for the exercise.

**AI output used:**

- Typed fixture extension
- Environment configuration
- Separate UI and API Playwright projects
- HTML and JUnit reporters
- Failure diagnostic configuration

**Human review and refinements:**

- Verified project names against package scripts
- Confirmed UI tests run only under `ui-chromium`
- Confirmed API tests run only under `api`
- Kept environment URLs overridable through environment variables

---

## Prompt 6 — Local Execution Commands

**Goal:** Provide clear commands for running the suite locally.

**Prompt:**

> Add package scripts for the following Playwright execution options:
>
> - Run all tests
> - Open all tests in Playwright UI mode
> - Open only SauceDemo tests in Playwright UI mode
> - Run only API tests
> - Open only API tests in Playwright UI mode
> - Run UI tests with the browser visible
> - Open the HTML report
>
> Make sure the commands use the project names defined in `playwright.config.ts`.

**AI output used:**

- `npm test`
- `npm run test:ui`
- `npm run test:ui:chromium`
- `npm run test:api`
- `npm run test:api:ui`
- `npm run test:headed`
- `npm run report`

**Human review and refinements:**

- Corrected the scripts to use `ui-chromium` and `api`
- Confirmed API tests use Playwright UI mode without launching a browser
- Kept the commands consistent with the configured project names

---

## Prompt 7 — Senior SDET Code Review

**Goal:** Evaluate the generated framework rather than accepting AI output without review.

**Prompt:**

> Review the generated Playwright framework as a senior SDET.
>
> Identify:
>
> - Weak or incomplete assertions
> - Brittle selectors
> - Duplicated setup
> - Unnecessary abstractions
> - Unused code
> - Hard-coded waits
> - Type-safety gaps
> - Tests that are not isolated
> - Incorrect assumptions about JSONPlaceholder persistence
> - Missing failure diagnostics
> - Documentation that does not match the implementation
>
> Recommend only improvements that add meaningful value within the exercise timebox.

**AI output used:**

- Suggestions for selector stability
- Suggestions for stronger API assertions
- Identification of duplicate setup
- Identification of unused placeholder utilities
- Documentation consistency checks
- JSONPlaceholder persistence warning

**Human review and refinements:**

- Removed empty `logger.ts` and `data-factory.ts` files
- Removed `.gitkeep` files after real files were added
- Strengthened API response validation
- Used stable `data-test` selectors
- Avoided hard-coded waits
- Updated documentation to match actual implemented coverage
- Limited additional improvements to those appropriate for the timebox

---

## Prompt 8 — README and Assessment Documentation

**Goal:** Make the repository understandable to a reviewer without requiring additional explanation.

**Prompt:**

> Create a professional README for the Vyne Senior QA Engineer assessment.
>
> Include:
>
> - Project objective
> - Test targets
> - Technology stack
> - Implemented UI and API coverage
> - Framework design
> - Repository structure
> - Prerequisites
> - Installation
> - Local execution commands
> - Environment configuration
> - Reporting
> - Continuous integration
> - AI-assisted development approach
> - AI-output improvements
> - Scope and trade-offs
> - Potential future improvements
>
> Describe only functionality that is actually implemented. Do not call implemented work planned coverage.

**AI output used:**

- README structure
- Coverage summary
- Execution documentation
- Framework design explanation
- AI-assisted development summary
- Future-improvement section

**Human review and refinements:**

- Removed references to unimplemented API user tests
- Changed planned coverage to implemented coverage
- Verified all commands against `package.json`
- Verified the project structure against the repository
- Added links to the AI evaluation and technical-decision documents

---

## Overall AI Usage Evaluation

AI accelerated the initial architecture, repetitive code generation, test-scenario brainstorming, and documentation work.

The output was not accepted without review. Changes were made to improve:

- Selector stability
- Assertion quality
- Code reuse
- Type safety
- Test isolation
- API behavior accuracy
- Documentation accuracy
- Scope control
- Framework maintainability

A detailed review of what worked, what did not work, and what was changed is available in [AI Evaluation](ai-evaluation.md).

The framework’s architectural choices and trade-offs are documented in [Technical Decisions](technical-decisions.md).