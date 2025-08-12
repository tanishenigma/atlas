import { useState } from "react";
import "./App.css";
import { Countries } from "./components/Countries";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchRegion from "./components/SearchRegion";

function App() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="pt-20">
      <Header />
      <SearchRegion setRegion={setRegion} setSearch={setSearch} />
      <Countries region={region} search={search} />
    </div>
  );
}

export default App;
