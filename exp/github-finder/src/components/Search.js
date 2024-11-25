import { React, useState } from "react";

function Search({ search }) {
  const [username, setUsername] = useState("");

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 폼 제출 방지
      if (username.trim() !== "") {
        search(username); // 부모 컴포넌트의 search 함수 호출
      } else {
        alert("Please enter a username."); // 빈 입력값 처리
      }
    }
  };
  return (
    <form
      className="searchBox"
      role="search"
      aria-label="GitHub User Search"
      onSubmit={(e) => e.preventDefault()} // 기본 제출 방지 (필요에 따라 수정 가능)
    >
      <h1>Search GitHub User</h1>
      <p>Enter a username to fetch a user profile and repositories.</p>

      {/* 검색 입력 */}
      <input
        id="username"
        type="text"
        name="username"
        placeholder="Enter GitHub username"
        aria-describedby="instructions"
        required
        onChange={(e) => setUsername(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </form>
  );
}

export default Search;
