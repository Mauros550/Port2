import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={"assets/about/aboutImage.JPG"}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"assets/about/cursorIcon.png"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>UpComing Developer</h3>
              <p>
                I've taken on the task to try and learn about coding and developing as possible,
                It's a never ending battle...I've heard.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"assets/about/cursorIcon.png"} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Future Developer</h3>
              <p>
                I hope to become a Full Stack Developer and work at a big company that
                let's me work from remote.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"assets/about/cursorIcon.png"} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Alternatives</h3>
              <p>
                If I am unable to acquire a Full Stack Position, I hope 
                to become an Automotive Engineer. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};