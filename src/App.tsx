import React from "react";
import "./App.css";
import HexagonTiles from "./components/HexaTiles/HexaTiles";
import { projects } from "./data/projectBriefs";

function App() {
  return (
    <div className="App">
      <HexagonTiles projectBriefs={projects} />
    </div>
  );
}

export default App;
