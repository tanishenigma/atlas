import "./App.css";
import { Countries } from "./components/Countries";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="pt-20">
      <Header />
      <div>
        <Search />
        <Filter />
      </div>
      <Countries />
    </div>
  );
}

export default App;
