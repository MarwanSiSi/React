import styles from "./CountryItem.module.css";
import PropTypes from "prop-types";

function getCountry(cities, country) {
  return cities.find((city) => city.country === country);
}

function CountryItem({ country, cities }) {
  const { emoji, country: countryName } = getCountry(cities, country);

  return (
    <li onClick={() => console.log("clicked")} className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{countryName}</span>
    </li>
  );
}

CountryItem.propTypes = {
  cities: PropTypes.array,
  country: PropTypes.string,
};

export default CountryItem;
