import React from "react";
import Card from "./Card";
import countriesData from "../countriesData";

export const Countries = () => {
  return (
    <div className="m-5 items-center justify-center flex flex-wrap overflow-auto">
      {countriesData.map((country) => (
        <Card
          name={country.name.common}
          region={country.region}
          capital={country.capital}
          population={country.population}
          id={country.cca3}
          img={country.flags.svg}
        />
      ))}
    </div>
  );
};
