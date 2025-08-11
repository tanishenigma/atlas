import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div>
      <form className="flex ">
        <div className="p-2  bg-zinc-600  rounded-md text-white ">
          <SearchIcon className="inline-block" />
          <input
            className="bg-transparent focus-within:outline-none pl-2"
            placeholder="Search For a Country"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
