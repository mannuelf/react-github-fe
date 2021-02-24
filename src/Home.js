import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Heading from "./components/Heading";
import ProfilePhoto from "./components/ProfilePhoto";
import RepoList from "./components/RepoList";

export default function Home({ username }) {
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
          <Heading name={myGitHubData.name} size="2" color="grey" />
        </header>
        <Navigation />
        <main>
          <RepoList username={username} />
        </main>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">NO DATA SORRY</header>
    </div>
  );
}
