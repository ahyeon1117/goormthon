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
      throw error;
    }
  }

  async get(url) {
    try {
      const response = await this.apiClient.get(`${url}`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user data:", error.message);
      throw error;
    }
  }
  async fetchCommits(owner, repo) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits`;

    try {
      const response = await axios.get(url);

      // 날짜별 커밋 개수 집계
      const dateCounts = response.data.reduce((acc, commit) => {
        const date = commit.commit.author.date.split("T")[0]; // YYYY-MM-DD 형식 추출
        acc[date] = (acc[date] || 0) + 1; // 날짜별 커밋 수 증가
        return acc;
      }, {});
      console.log(dateCounts);
      // 커밋 데이터에 cnt 추가
      return response.data.map((commit) => {
        const date = commit.commit.author.date.split("T")[0];
        return {
          date,
          message: commit.commit.message,
          count: dateCounts[date] // 해당 날짜의 커밋 개수
        };
      });
    } catch (error) {
      console.error("Error fetching commits:", error);
      return [];
    }
  }
}

export default GitHub;
