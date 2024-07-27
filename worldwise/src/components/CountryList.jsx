import PropTypes from "prop-types";

import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../Context/CitiesContext";

function getId(country, cities) {
  return cities.find((city) => city.country === country).id;
}

function CountryList() {
  const { cities, isLoading } = useCities();

  const countries = cities.map((city) => city.country);
  const uniqueCountries = [...new Set(countries)];

  console.log(uniqueCountries);

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message={"Add your first city by clicking on a city on a map"} />
    );

  return (
    <ul className={styles.countryList}>
      {uniqueCountries.map((country) => (
        <CountryItem
          key={getId(country, cities)}
          country={country}
          cities={cities}
        />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CountryList;
