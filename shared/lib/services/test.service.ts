// services/test.service.ts

import { ApiClient } from '../clients/api-client';
import { TestResponse } from '../models/test';

export class TestService {
  private apiClient: ApiClient;
  private endpoint: string = '/test';

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async test(method: string, data?: any): Promise<TestResponse> {
    return this.apiClient.request<TestResponse>(method, this.endpoint, data);
  }
}
