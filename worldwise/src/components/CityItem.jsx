import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./CityItem.module.css";
import { useCities } from "../Context/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currCity, deleteCity } = useCities();

  const { cityName, emoji, date, id } = city;
  const { lat, lng } = city.position;

  async function handleDeleteCity(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          city.id === currCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button onClick={handleDeleteCity} className={styles.deleteBtn}>
          &#10006;
        </button>
      </Link>
    </li>
  );
}

CityItem.propTypes = {
  city: PropTypes.shape({
    cityName: PropTypes.string,
    emoji: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string,
    position: PropTypes.object,
  }),
};

export default CityItem;
