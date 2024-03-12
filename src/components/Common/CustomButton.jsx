import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ title, icon: Icon, size, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {Icon && <Icon size={size} style={{ marginRight: "10px" }} />}{" "}
      <span className={styles.title}>{title}</span>
    </button>
  );
};

export default CustomButton;
