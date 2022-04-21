import { useState } from "react";
import GitHubSearch from "./components/GitHubSearch";
import { IRepository } from "./interfaces/IRepository";

function App() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <GitHubSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        repositories={repositories}
        setRepositories={setRepositories}
      />
    </>
  );
}

export default App;
