import { ArrowDownWideNarrow } from "lucide-react";
import React, { useState } from "react";

const Filter = () => {
  const [region, SetRegion] = useState(0);
  const continent = [
    "Asia",
    "Oceania",
    "Antarctica",
    "Africa",
    "Europe",
    "North America",
    "South America",
  ];
  const handleClick = () => {
    SetRegion((prev) => !prev);
    console.log(continent.value);
  };
  return (
    <div className="flex mr-5 justify-center  relative">
      <button
        onClick={() => {
          handleClick();
        }}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        className="bg-zinc-600 p-2 rounded-md flex gap-x-2">
        Filter By Region
        <ArrowDownWideNarrow />
      </button>
      {region ? (
        <div className="absolute top-12 flex flex-col flex-end bg-zinc-700 rounded-xl p-4 py-0 cursor-pointer pt-2 pb-2">
          {continent.map((region) => (
            <ul>
              <li
                className="hover:bg-zinc-600 p-2 rounded-lg"
                onClick={() => {
                  handleClick();
                }}
                value={region}>
                {region}
              </li>
            </ul>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
