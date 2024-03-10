import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img
        width="90px"
        src="https://www.aman.com/themes/custom/aman/logo.svg"
      ></img>
      <div>Copyright 2024, Aman Group S.a.r.l.</div>
    </div>
  );
};

export default Footer;
