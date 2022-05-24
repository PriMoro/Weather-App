import React from "react";
import { Link } from "react-router-dom";
import styles from "./City.module.css";

function City({ city }) {
  if (!city) {
    alert("this city does not exist");
    return <div>this city does not exist</div>;
  }
  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <h1 className={styles.name}>{city.name}</h1>
        <div className={styles.data}>
          <div className={styles.demo}>
            <h2>Temperature: {city.temp} ºC</h2>
            <h2>Weather: {city.weather}</h2>
            <h2>Wind Speed: {city.wind} km/h</h2>
            <h2>Clouds Cover: {city.clouds}</h2>
            <h2>Latitude: {city.latitud}º</h2>
            <h2>Longitude: {city.longitud}º</h2>
            <h2>Id: {city.id}</h2>
          </div>
        </div>
      </div>

      <Link to="/weather">
        <button className={styles.button}>Back to App</button>
      </Link>
    </div>
  );
}
export default City;
