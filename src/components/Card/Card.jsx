import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className={styles.card}>
      <div className={styles.closeIcon}>
        <button className={styles.button} onClick={onClose}>
          X
        </button>
      </div>
      <div className={styles.cardbody}>
        <Link to={`/city/${id}`}>
          <h5 className={styles.cardtitle}>{name}</h5>
        </Link>
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <p>Min</p>
            <p>{min}°</p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <p>Max</p>
            <p>{max}°</p>
          </div>
          <div className={styles.cardimg}>
            <img
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
