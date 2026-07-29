# Technical Decisions

- **Playwright with TypeScript:** One tool supports both browser and API testing while providing strong typing, tracing, parallel execution, and built-in reporting.
- **Separate UI and API projects:** Each target has its own base URL and can be run independently.
- **Page objects:** UI locators and interactions are centralized without hiding the business purpose of each test.
- **Typed fixtures:** Tests receive initialized page objects and the API client with minimal repeated setup.
- **Stable selectors:** SauceDemo `data-test` attributes are preferred over CSS position or text-only selectors.
- **Focused coverage:** The suite covers critical login, cart, checkout, and posts API behavior rather than maximizing test count.
- **No persistence assumption:** JSONPlaceholder write tests validate the immediate simulated response only.
- **Failure diagnostics:** Trace, screenshots, video, HTML, and JUnit results support local and CI investigation.
