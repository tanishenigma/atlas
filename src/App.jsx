import "./App.css";
import { Countries } from "./components/Countries";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import SearchRegion from "./components/SearchRegion";

function App() {
  return (
    <div className="pt-20">
      <Header />
      <SearchRegion />
      <Countries />
    </div>
  );
}

export default App;
