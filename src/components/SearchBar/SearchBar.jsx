import React, { useState } from "react";
import styles from "./SearchBar.module.css";
export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <div>
        <input
          className={styles.input}
          type="text"
          placeholder="Search your city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className={styles.button} type="submit" value="Add" />
      </div>
    </form>
  );
}
