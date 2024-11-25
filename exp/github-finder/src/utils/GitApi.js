import axios from "axios";

class GitHub {
  constructor() {
    const token = process.env.REACT_APP_GITHUB_TOKEN; // 환경 변수에서 토큰 가져오기
    if (!token) throw new Error("API token is required."); // 토큰이 없으면 에러
    this.apiClient = axios.create({
      baseURL: "https://api.github.com",
      headers: {
        Authorization: `Bearer ${token}` // 토큰 설정
      }
    });
  }

  // 사용자 정보 가져오기
  async getUser(userName) {
    try {
      const response = await this.apiClient.get(`/search/users?q=${userName}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user data:", error.message);
      throw error; // 에러 전달
    }
  }
  async get(url) {
    try {
      const response = await this.apiClient.get(`${url}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user data:", error.message);
      throw error; // 에러 전달
    }
  }
}

export default GitHub;
