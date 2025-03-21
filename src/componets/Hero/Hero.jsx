import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, Im Mauro Mariscal</h1>
            <p className= {styles.description}>
                I am a beginner coding developer! If you have any tips for me. Reach out!
            </p>
            <a href="mailtomyemail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={"assets/hero/heroImage.JPG"} alt="Hero image of me " className={styles.heroImg}/>
    <div className= {styles.topBlur} />
    <div className= {styles.bottomBlur} />
    </section>
        
    );
};