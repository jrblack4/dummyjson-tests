import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    trace: 'on',
    baseURL: 'https://dummyjson.com',
  },
  projects: [
    {
      name: 'dummyJSONApi',
    },
  ],
});
