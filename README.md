# Vyne AI Playwright Assessment

A Playwright and TypeScript test automation framework created from scratch for the Vyne Senior QA Engineer take-home exercise.

The framework demonstrates AI-assisted development while testing both a web application and a REST API. AI was used to support framework design, test generation, code review, and documentation, while all generated output was reviewed and refined before being included.

## Test Targets

| Target | Application |
|---|---|
| Web UI | [SauceDemo](https://www.saucedemo.com/) |
| API | [JSONPlaceholder](https://jsonplaceholder.typicode.com/) |

## Technology Stack

- Playwright
- TypeScript
- Node.js
- Playwright Test
- GitHub Actions
- HTML and JUnit reporting

Playwright was selected because it supports both browser and API testing within one framework while providing built-in fixtures, assertions, parallel execution, tracing, screenshots, video capture, and reporting.

## Implemented Test Coverage

### SauceDemo UI

The UI suite covers critical authentication and shopping workflows:

- Successful login using a standard user
- Locked-out user validation
- Invalid credential validation
- Add a product to the shopping cart
- Remove a product from the shopping cart
- Complete the checkout workflow
- Verify the order confirmation

### JSONPlaceholder API

The API suite covers the posts resource:

- Retrieve all posts
- Retrieve a post by ID
- Validate a missing post returns `404`
- Create a simulated post
- Update a simulated post
- Delete a simulated post

JSONPlaceholder simulates `POST`, `PUT`, and `DELETE` operations. These tests validate the immediate API response and do not assume that changes are permanently stored.

## Framework Design

The framework uses:

- Page Object Model for UI interactions
- Typed Playwright fixtures for dependency initialization
- A reusable API client for JSONPlaceholder requests
- Separate UI and API Playwright projects
- Environment-based application URLs
- Centralized test data
- Stable SauceDemo `data-test` selectors
- Playwright web-first assertions
- Parallel test execution
- Failure artifacts including traces, screenshots, and videos
- HTML and JUnit test reports

## Project Structure

```text
vyne-ai-playwright-assessment/
├── .github/
│   └── workflows/
├── docs/
│   ├── ai-evaluation.md
│   ├── ai-prompts.md
│   └── technical-decisions.md
├── src/
│   ├── api/
│   │   └── json-placeholder.client.ts
│   ├── config/
│   │   └── environment.ts
│   ├── fixtures/
│   │   └── test.fixture.ts
│   └── pages/
│       ├── cart.page.ts
│       ├── checkout.page.ts
│       ├── inventory.page.ts
│       └── login.page.ts
├── test-data/
│   ├── checkout.ts
│   └── users.ts
├── tests/
│   ├── api/
│   │   └── posts.spec.ts
│   └── ui/
│       ├── cart.spec.ts
│       ├── checkout.spec.ts
│       └── login.spec.ts
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Prerequisites

- Node.js 20 or later
- npm
- Git

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/sanjeebbanjara01-cpu/vyne-ai-playwright-assessment.git
cd vyne-ai-playwright-assessment
npm install
npx playwright install chromium
```

## Running the Tests

### Run all UI and API tests

```bash
npm test
```

### Open all tests in Playwright UI mode

```bash
npm run test:ui
```

### Open only SauceDemo tests in Playwright UI mode

```bash
npm run test:ui:chromium
```

### Run only JSONPlaceholder API tests

```bash
npm run test:api
```

### Open only API tests in Playwright UI mode

```bash
npm run test:api:ui
```

### Run SauceDemo tests with a visible browser

```bash
npm run test:headed
```

### Open the HTML report

```bash
npm run report
```

## Environment Configuration

The framework uses the following default URLs:

```text
WEB_BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://jsonplaceholder.typicode.com
```

The URLs can be overridden when running locally or in CI:

```bash
WEB_BASE_URL=https://www.saucedemo.com \
API_BASE_URL=https://jsonplaceholder.typicode.com \
npm test
```

## Test Projects

Two Playwright projects are configured:

| Project | Purpose |
|---|---|
| `ui-chromium` | Executes SauceDemo UI tests using Chromium |
| `api` | Executes JSONPlaceholder API tests using Playwright APIRequestContext |

This separation allows the UI and API suites to be executed independently while remaining part of the same framework.

## Reporting and Failure Diagnostics

The framework generates:

- Console test results
- Playwright HTML report
- JUnit XML results
- Screenshots on failure
- Videos on failure
- Playwright traces on failure

The HTML report can be opened with:

```bash
npm run report
```

## Continuous Integration

The repository includes a GitHub Actions workflow that installs the project dependencies, installs Chromium, executes the automated tests, and publishes the Playwright report as a workflow artifact.

Test artifacts are generated even when a test fails so failures can be investigated using reports, screenshots, videos, and traces.

## AI-Assisted Development

AI was used as an engineering assistant to help with:

- Initial framework architecture
- Page object generation
- UI and API test generation
- Reusable fixture and API-client design
- Test scenario identification
- Code review and refactoring suggestions
- Documentation generation

All AI-generated output was reviewed before being included. Generated code was evaluated for maintainability, selector stability, assertion quality, duplication, type safety, and correctness.

The following documents provide additional details:

- [AI prompts used during development](docs/ai-prompts.md)
- [Evaluation of the AI-generated output](docs/ai-evaluation.md)
- [Technical decisions and trade-offs](docs/technical-decisions.md)

## Key AI-Output Improvements

Examples of changes made after reviewing AI-generated output include:

- Replacing brittle selectors with SauceDemo `data-test` selectors
- Strengthening API assertions to validate status codes, headers, and response structure
- Centralizing page-object and API-client creation with typed fixtures
- Removing unnecessary placeholder utility files
- Avoiding hard-coded waits and relying on Playwright auto-waiting
- Correcting API tests so they do not assume JSONPlaceholder persists write operations
- Limiting the suite to high-value scenarios appropriate for the exercise timebox

## Scope and Trade-Offs

The exercise was intentionally limited to a focused set of high-value scenarios.

The goal was not to maximize the number of tests. The priority was to demonstrate:

- Clear framework architecture
- Maintainable test code
- Meaningful assertions
- Separation of UI and API concerns
- Reliable execution
- Useful failure diagnostics
- Thoughtful evaluation of AI-generated output

Potential future improvements include:

- Runtime API schema validation
- Accessibility testing
- Additional browser coverage
- Smoke and regression tags
- Expanded API resource coverage
- Test-data generation
- Additional negative checkout scenarios

## Author

**Sanjeeb Banjara**