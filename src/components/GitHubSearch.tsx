import { useEffect, useState } from "react";
import { IRepository } from "../interfaces/IRepository";
import { fetchData } from "../utils/fetchData";
import { formatName } from "../utils/formatName";
import NavigationButtons from "./NavigationButtons";

export default function GitHubSearch() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(
    () => {
      if (page >= 1) {
        fetchData(searchTerm, setRepositories, page);
      }
    },
    /* eslint-disable */ [page]
  );

  return (
    <div className="container">
      <form
        className="search-form"
        id="form"
        role="search"
        onSubmit={(e) => {
          e.preventDefault(); //to prevent the page from refreshing when you press Enter
          fetchData(searchTerm, setRepositories, page);
        }}
      >
        <input
          className="input"
          value={searchTerm}
          type="search"
          name="q"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>

      {repositories.length > 0 && (
        <>
          <table className="results-table">
            <thead>
              <tr>
                <th>Repository Name</th>
                <th>Author Name</th>
                <th>Number of Stars</th>
              </tr>
            </thead>
            <tbody>
              {repositories.map((repo, i) => (
                <tr key={i}>
                  <td>{formatName(repo.name)}</td>
                  <td>{repo.owner.login}</td>
                  <td>{repo.stargazers_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <NavigationButtons page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}
