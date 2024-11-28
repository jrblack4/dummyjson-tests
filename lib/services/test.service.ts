// services/test.service.ts

import { PlaywrightApiClient } from '../clients/playwright-api';
import { TestResponse } from '../models/Test';

export class TestService {
  private apiClient: PlaywrightApiClient;
  private endpoint: string = '/test';

  constructor(apiClient: PlaywrightApiClient) {
    this.apiClient = apiClient;
  }

  async test(method: string, data?: any): Promise<TestResponse> {
    return this.apiClient.request<TestResponse>(method, this.endpoint, data);
  }
}
