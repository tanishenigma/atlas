import React from "react";
import Card from "./Card";
import countriesData from "../countriesData";

export const Countries = ({ search, region }) => {
  const searchBar = countriesData.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" ||
        country.region.toLowerCase().includes(region.toLowerCase()))
  );

  return (
    <div className="m-5 items-center justify-center flex flex-wrap overflow-auto">
      {searchBar.map((country, key) => (
        <Card
          key={country.cca3}
          name={country.name.common}
          region={country.region}
          capital={country.capital}
          population={country.population}
          img={country.flags.svg}
        />
      ))}
    </div>
  );
};
