import { React } from "react";
function RepoBox({ repoArr }) {
  return (
    <div className="repo-box">
      <h1>Latest Repos</h1>
      <table className="repo-article">
        {repoArr.map((repo, index) => (
          <tr key={index}>
            <td>
              <h3>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  {repo.name}
                </a>
              </h3>
            </td>
            <td>
              <div className="repo-item">
                <h3 className="first-color">Starts: {repo.stargazers_count}</h3>
                <h3 className="second-color">
                  Watchers: {repo.watchers_count}
                </h3>
                <h3 className="third-color">Forks: {repo.forks_count}</h3>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default RepoBox;
