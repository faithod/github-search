import { useState } from "react";
import GitHubSearch from "./components/GitHubSearch";
import { IRepository } from "./interfaces/IRepository";
import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>GitHub Search</h1>
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
