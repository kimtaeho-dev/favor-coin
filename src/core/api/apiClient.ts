import camelcaseKeys from 'camelcase-keys';

export default class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const { ...fetchOptions } = options;

    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, fetchOptions);

      if (response.ok) {
        const data = await response.json();
        return camelcaseKeys(data, { deep: true }) as T;
      }

      const errorData = await response.json().catch(() => null);
      const error = new Error(response.statusText) as any;
      error.status = response.status;
      error.data = errorData;

      throw error;
    } catch (error) {
      console.error(`Fetch Error: ${(error as Error).message}`);
      throw error;
    }
  }

  public get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  public post<T>(
    endpoint: string,
    body?: unknown,
    options?: RequestInit,
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  }
}
