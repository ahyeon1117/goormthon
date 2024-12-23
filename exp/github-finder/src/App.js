import GitApi from "./utils/GitApi";
import Search from "./components/Search";
import GitHubGrass from "./components/GitHubGrass";
import ProfileBox from "./components/ProfileBox";
import RepoBox from "./components/RepoBox";
import { useState } from "react";
function App() {
  const [apiUrl, setApiUrl] = useState("");
  const [cntObj, setCntObj] = useState("");
  const [repoArr, setRepoArr] = useState("");
  const [commitData, setCommitData] = useState({});
  const [searchUser, setSearchUser] = useState({});
  const search = (data) => {
    setSearchUser(data);
    (async () => {
      const gitHub = new GitApi();
      try {
        const userData = await gitHub.getUser(data);
        setApiUrl(userData.items[0]);

        const [
          followersData,
          followingsData,
          reposData,
          gistsData,
          commitData
        ] = await Promise.all([
          gitHub.get(userData.items[0].followers_url),
          gitHub.get(
            userData.items[0].following_url.replace("{/other_user}", "")
          ), // GitHub API의 `{/other_user}` 제거
          gitHub.get(userData.items[0].repos_url),
          gitHub.get(userData.items[0].gists_url.replace("{/gist_id}", "")),
          gitHub.fetchCommits(data, data)
        ]);
        console.log(commitData);
        setCommitData(commitData);
        setRepoArr(reposData);
        setCntObj({
          followCnt: followersData.length,
          followingCnt: followingsData.length,
          repoCnt: reposData.length,
          gistsCnt: gistsData.length
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error.message);
      }
    })();
  };

  return (
    <main className="app">
      <header className="app-header">
        <h2>GitHub Finder</h2>
      </header>
      <Search search={search}></Search>
      {cntObj && repoArr && commitData && searchUser && (
        <article>
          <ProfileBox
            profileImg={apiUrl.avatar_url}
            profileUrl={apiUrl.html_url}
            cntObj={cntObj}
          />
          <GitHubGrass
            commitData={commitData}
            searchUser={searchUser}
          ></GitHubGrass>
          <RepoBox repoArr={repoArr} />
        </article>
      )}
    </main>
  );
}

export default App;
