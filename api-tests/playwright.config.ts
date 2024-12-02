import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
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
