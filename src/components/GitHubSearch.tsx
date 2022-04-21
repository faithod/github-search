import { IRepository } from "../interfaces/IRepository";
import { fetchData } from "../utils/fetchData";

export default function GitHubSearch({
  searchTerm,
  setSearchTerm,
  repositories,
  setRepositories,
}: {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  repositories: IRepository[];
  setRepositories: React.Dispatch<React.SetStateAction<IRepository[]>>;
}) {
  console.log(repositories);
  return (
    <>
      <form id="form" role="search">
        <input
          value={searchTerm}
          type="search"
          name="q"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
            fetchData(searchTerm, setRepositories);
          }}
        />
      </form>

      {repositories.length > 0 && (
        <table>
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
                <td>{repo.name}</td>
                <td>{repo.owner.login}</td>
                <td>{repo.stargazers_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
