import React from "react";
import styles from "./Activity.module.css";

const Activity = ({ image, topic, content, title }) => {
  return (
    <div className={styles.container}>
      <img src={image}></img>
      <h3 className={styles.topic}>{topic}</h3>
      <h1 className={styles.title}>{title}</h1>
      <p>{content}</p>
      <a className={styles.discover__button} href="">
        Discover more
      </a>
    </div>
  );
};

export default Activity;
