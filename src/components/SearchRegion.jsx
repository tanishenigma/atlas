import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const SearchRegion = () => {
  return (
    <div className="flex justify-between mt-10 w-screen">
      <div className="mx-5">
        <Search />
      </div>
      <div className="mx-5">
        <Filter />
      </div>
    </div>
  );
};

export default SearchRegion;
