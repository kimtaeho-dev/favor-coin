import camelcaseKeys from 'camelcase-keys';

import { APIError } from '@/model/global';

export default class APIService {
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

      const error = { status: response.status } as APIError;
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

  public post<T>(endpoint: string, body?: unknown, options?: RequestInit): Promise<T> {
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
