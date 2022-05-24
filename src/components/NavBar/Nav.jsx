import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div className={styles.row}>
      <div className={styles.weatherapp}>
        <Link to={"/"}>- Weather App</Link>
      </div>
      <div className={styles.aboutme}>
        <Link to="/about">About Me</Link>
      </div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default Nav;
