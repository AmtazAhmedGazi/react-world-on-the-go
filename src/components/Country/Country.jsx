import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const currencies = Object.keys(country.currencies.currencies);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"} `}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Currencies: {currencies} </p>
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
