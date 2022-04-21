import { useEffect, useState } from "react";
import GitHubSearch from "./components/GitHubSearch";
import { IRepository } from "./interfaces/IRepository";

function App() {
  const [repositories, setRepositories] = useState<IRepository[]>();
  const [searchTerm, setSearchTerm] = useState("tetris");
  useEffect(() => {
    fetch(
      `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc&per_page=25`, //query searches for repositories with  searchTerm in the name, the description, or the README. Results are sorted by stars in descending order
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setRepositories(data.items);
        console.log(data.items);
      });
  }, []);
  return (
    <>
      <GitHubSearch />
    </>
  );
}

export default App;
