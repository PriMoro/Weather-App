import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards({ cities, onClose }) {
  return (
    <div className={styles.div}>
      <div className={styles.cards}>
        {cities.map((c) => (
          <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          />
        ))}
      </div>
    </div>
  );
}
