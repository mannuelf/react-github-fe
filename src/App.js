import { useState, useEffect } from "react";
import "./sass/App.css";
import Heading from "./components/Heading";
import ProfilePhoto from "./components/ProfilePhoto";
import RepoList from "./components/RepoList";

export default function App({ username }) {
  const [myGitHubData, setMyGitHubData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        const apiData = response.json();
        return apiData;
      })
      .then((apiData) => setMyGitHubData(apiData))
      .catch((error) => console.log(error));
  }, [username]);

  if (myGitHubData) {
    return (
      <div className="App">
        <header className="App-header">
          <ProfilePhoto
            avatarUrl={myGitHubData.avatar_url}
            avatarAlt={myGitHubData.name}
          />
          <Heading name={myGitHubData.name} />
          <RepoList username={username} />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">NO DATA SORRY</header>
    </div>
  );
}
