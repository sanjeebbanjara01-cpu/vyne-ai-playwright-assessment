# Evaluation of AI-Generated Output

## What worked

- AI produced a useful initial structure quickly.
- It correctly identified page objects, fixtures, environment configuration, and an API client as appropriate reusable components.
- It suggested high-value UI and API scenarios without requiring a large test suite.

## What required review or correction

- Generated selectors were reviewed and replaced with stable SauceDemo `data-test` selectors where possible.
- Assertions were strengthened to validate URLs, visible business outcomes, response status, headers, and response shape.
- Repeated login and object construction were consolidated through typed fixtures and setup hooks.
- Hard waits and arbitrary timeouts were rejected in favor of Playwright auto-waiting and web-first assertions.
- API write tests were corrected so they do not claim JSONPlaceholder permanently stores POST, PUT, or DELETE changes.
- The framework was kept intentionally small to remain maintainable and appropriate for the exercise time limit.

## Remaining improvements

- Add runtime response-schema validation with a library such as Zod.
- Add accessibility checks for critical UI pages.
- Add API contract checks against an OpenAPI specification if one becomes available.
- Add cross-browser UI execution after validating the Chromium suite.
- Add tags or test annotations for smoke and regression selection.
