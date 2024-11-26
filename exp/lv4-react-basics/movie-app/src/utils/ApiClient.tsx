import axios, { AxiosInstance, AxiosResponse } from "axios";

class ApiClient {
  private apiClient: AxiosInstance;

  constructor(baseURL?: string) {
    this.apiClient = axios.create({
      baseURL,
    });
  }

  async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.apiClient.get(url);
      return response.data;
    } catch (error: any) {
      console.error("Failed to fetch data:", error.message);
      throw error;
    }
  }
}

export default ApiClient;
