import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landingpage}>
      <div className={styles.row}>
        <div className={styles.container}>
          <h1 className={styles.p}>Welcome to Weather App</h1>
        </div>
        <Link to="/weather">
          <button className={styles.button}>Search Weather</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
