import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { MdOpenInNew } from "react-icons/md";

export default function RepoList({ username }) {
  const [repoList, setRepoList] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=created`)
      .then((response) => {
        const apiData = response.json();
        return apiData;
      })
      .then((apiData) => setRepoList(apiData))
      .catch((error) => console.log(error));
  }, [username]);

  if (repoList) {
    return (
      <>
        <ListGroup>
          {repoList.map((repo) => {
            return (
              <ListGroup.Item key={repo.id}>
                <a href={repo.html_url}>
                  {repo.name} <MdOpenInNew />
                </a>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </>
    );
  }

  return "No data sorry";
}
