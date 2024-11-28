
// clients/PlaywrightApiClient.ts
import { ApiClient } from './api-client';
import { APIRequestContext } from '@playwright/test';

export class PlaywrightApiClient extends ApiClient {
  private requestContext: APIRequestContext;

  constructor(baseUrl: string, requestContext: APIRequestContext) {
    super(baseUrl);
    this.requestContext = requestContext;
  }

  public async request<T>(
    method: string,
    endpoint: string,
    data?: any,
    options?: {
      headers?: Record<string, string>;
      params?: Record<string, any>;
      form?: Record<string, any>;
      multipart?: FormData;
    }
  ): Promise<T> {
    const url = new URL(endpoint, this.baseUrl);

    // Handle query parameters
    if (options?.params) {
      Object.entries(options.params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    const fetchOptions: any = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      failOnStatusCode: false,
    };

    if (options?.form) {
      // For form data
      fetchOptions.form = options.form;
      delete fetchOptions.headers['Content-Type'];
    } else if (options?.multipart) {
      // For multipart data
      fetchOptions.multipart = options.multipart;
      delete fetchOptions.headers['Content-Type'];
    } else if (data) {
      // For JSON data
      fetchOptions.data = data;
    }

    const response = await this.requestContext.fetch(url.toString(), fetchOptions);

    if (!response.ok()) {
      throw new Error(
        `${method} ${endpoint} failed with status ${response.status()}`
      );
    }
    return (await response.json()) as T;
  }
}

