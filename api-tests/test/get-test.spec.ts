import { test, expect } from '@playwright/test';
import { PlaywrightApiClient } from '../../shared/lib/clients/playwright-api';
import { TestService } from '../../shared/lib/services/test.service';

test.describe('/test endpoint', () => {
  let testService: TestService;

  test('GET /test', async ({ request }) => {
    const apiClient = new PlaywrightApiClient('https://dummyjson.com', request);
    testService = new TestService(apiClient);

    const response = await testService.test('GET');
    expect(response).toHaveProperty('status', 'ok');
    expect(response).toHaveProperty('method', 'GET');
  });

  test('POST /test', async ({ request }) => {
    const apiClient = new PlaywrightApiClient('https://dummyjson.com', request);
    testService = new TestService(apiClient);

    const response = await testService.test('POST', {});
    expect(response).toHaveProperty('status', 'ok');
    expect(response).toHaveProperty('method', 'POST');
  })
});
