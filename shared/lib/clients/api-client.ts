// clients/api-client.ts

export abstract class ApiClient {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public abstract request<T>(
    method: string,
    endpoint: string,
    data?: any,
    options?: {
      headers?: Record<string, string>;
      params?: Record<string, any>;
      form?: Record<string, any>;
      multipart?: FormData;
    }
  ): Promise<T>;
}
