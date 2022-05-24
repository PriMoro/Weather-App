import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.aboutbody}>
      <div className={styles.namediv}>
        <h1 className={styles.name}>Hi! My name is Priscila Moro. </h1>
      </div>
      <div className={styles.jobdiv}>
        <h1 className={styles.job}>I'm a full stack developer</h1>
      </div>
      <h1 className={styles.description}>I'm passionate about technology.</h1>
      <h1 className={styles.description}>
        I really enjoy creating and developing software, especially if I can do
        it with a team.
      </h1>
      <h1 className={styles.description}>
        I'm pretty sure that IT world is my place.
      </h1>
      <div className={styles.row}>
        <a
          href="https://www.linkedin.com/in/priscilamoro/"
          className={styles.cv}
        >
          LINKEDIN
        </a>
        <a
          href="https://github.com/PriMoro/Weather-App"
          className={styles.github}
        >
          GITHUB
        </a>
      </div>

      <div>
        <Link to="/weather">
          <button className={styles.button}>Back to App</button>
        </Link>
      </div>
    </div>
  );
}
export default About;
