import React from "react";

const Country = ({ country }) => {
  const currencies = Object.keys(country.currencies.currencies);
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Currencies: {currencies} </p>
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <br />
    </div>
  );
};

export default Country;
