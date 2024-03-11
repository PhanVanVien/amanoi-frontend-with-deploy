import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ title }) => {
  return <div className={styles.button}>{title}</div>;
};

export default CustomButton;
