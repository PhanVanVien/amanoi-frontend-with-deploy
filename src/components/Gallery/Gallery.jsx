import React from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
      <div className={styles.box}>
        <img src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
      <div className={styles.box}>
        <img src="https://images.pexels.com/photos/1056497/pexels-photo-1056497.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
      <div className={styles.box}>
        <img src="https://images.pexels.com/photos/386000/pexels-photo-386000.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
      <div className={styles.box}>
        <img src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
      <div className={styles.box}>
        <img src="https://images.pexels.com/photos/279574/pexels-photo-279574.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
      <div className={styles.box}>
        <img src="https://images.pexels.com/photos/2964163/pexels-photo-2964163.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
      </div>
    </div>
  );
};

export default Gallery;
