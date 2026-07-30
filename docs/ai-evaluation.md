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

## Concrete Examples of AI Review and Refinement

| AI-generated output | Problem found | Change made |
|---|---|---|
| Generic selectors | The selectors could become brittle and fail when the page structure changes | Replaced them with stable SauceDemo `data-test` selectors |
| Assumed API changes were persisted | JSONPlaceholder simulates write operations and does not permanently save changes | Validated the immediate POST, PUT, and DELETE responses only |
| Repeated object creation | Recreating page objects and API clients increased duplication | Added typed Playwright fixtures to centralize initialization |
| Basic API assertions | Status-only checks provided weak confidence in the API response | Added status-code, content-type, and response-object shape validation |
| Empty utility classes | The generated utility files added no value and were not used | Removed the empty `logger.ts` and `data-factory.ts` files |
| Too many possible scenarios | Automating every suggested scenario would exceed the exercise timebox | Selected critical, risk-based authentication, shopping, and API workflows |
| Hard-coded waits | Fixed waits can make tests slow and unreliable | Used Playwright auto-waiting and web-first assertions |
| Documentation that did not match the implementation | Early documentation referred to planned or unimplemented coverage | Updated the README and supporting documents to reflect only completed work |

## Remaining improvements

- Add runtime response-schema validation with a library such as Zod.
- Add accessibility checks for critical UI pages.
- Add API contract checks against an OpenAPI specification if one becomes available.
- Add cross-browser UI execution after validating the Chromium suite.
- Add tags or test annotations for smoke and regression selection.
