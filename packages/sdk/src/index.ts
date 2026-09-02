import type { OfficialSurfaceId } from "@bemara/domain";

export interface BemaraApiClientOptions {
  baseUrl: string;
  getAccessToken?: () => Promise<string | undefined> | string | undefined;
}

export interface BemaraHealthResponse {
  ok: boolean;
  service: "bemara-api";
  surfaceContracts: OfficialSurfaceId[];
}

export class BemaraApiClient {
  readonly #baseUrl: string;
  readonly #getAccessToken?: BemaraApiClientOptions["getAccessToken"];

  constructor(options: BemaraApiClientOptions) {
    this.#baseUrl = options.baseUrl.replace(/\/$/, "");
    this.#getAccessToken = options.getAccessToken;
  }

  async health(): Promise<BemaraHealthResponse> {
    return this.request<BemaraHealthResponse>("/health");
  }

  private async request<T>(path: string): Promise<T> {
    const token = await this.#getAccessToken?.();
    const response = await fetch(`${this.#baseUrl}${path}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    if (!response.ok) {
      throw new Error(`BEMARA API request failed with ${response.status}`);
    }

    return (await response.json()) as T;
  }
}
