export const environment = {
  webBaseUrl: process.env.WEB_BASE_URL ?? 'https://www.saucedemo.com',
  apiBaseUrl:
    process.env.API_BASE_URL ?? 'https://jsonplaceholder.typicode.com',
} as const;
