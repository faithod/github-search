import { useState } from "react";
import GitHubSearch from "./components/GitHubSearch";
import { IRepository } from "./interfaces/IRepository";
import "./styles.css";

function App() {
  return (
    <>
      <h1>GitHub Search</h1>
      <GitHubSearch />
    </>
  );
}

export default App;
