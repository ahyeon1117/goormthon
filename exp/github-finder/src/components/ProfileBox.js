import { React } from "react";
import Random from "../utils/Random";
import randomValue from "../json/random.json";
function ProfileBox({ profileImg, profileUrl, cntObj }) {
  const random = new Random();
  const company = random.chooseRandom(randomValue.koreanConglomerates);
  const region = random.chooseRandom(randomValue.regions);
  const since = random.getRandomBirthday();
  function goProfile() {
    window.open(profileUrl, "_blank");
  }

  return (
    <div className="profileBox">
      <ul>
        <li className="mgt12">
          <img src={profileImg} />
        </li>
        <li>
          <div className="first-color">Public Repos : {cntObj.repoCnt}</div>
          <div className="second-color">Public Gists : {cntObj.gistsCnt}</div>
          <div className="third-color">Followers : {cntObj.followCnt}</div>
          <div className="fourth-color">Following : {cntObj.followingCnt}</div>
        </li>
        <li className="description">
          <table>
            <tr>
              <td>Company : {company}</td>
            </tr>
            <tr>
              <td>
                WebSite/Blog :
                <a href="https://exp.goorm.io/education/org_TcbkQFviBcogT1joUp/dashboard/posts">
                  {` https://exp.goorm.io/education/org_TcbkQFviBcogT1joUp/dashboard/posts`}
                </a>
              </td>
            </tr>
            <tr>
              <td>Location : {region}</td>
            </tr>
            <tr>
              <td>Member Since : {since}</td>
            </tr>
          </table>
        </li>
        <li>
          <button onClick={goProfile}>View Profile</button>
        </li>
      </ul>
    </div>
  );
}
export default ProfileBox;
