import React from "react";
import styles from "./Header.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left__container}>
        <CiMenuBurger size={28} /> <a style={{ marginLeft: "28px" }}>Menu</a>{" "}
        <HiMagnifyingGlass style={{ marginLeft: "50px" }} size={20} />
      </div>
      <div className={styles.logo}>
        <a href="http://localhost:5173/">
          <img
            src="https://www.aman.com/themes/custom/aman/logo.svg"
            width={150}
            height={40}
          />
        </a>
      </div>
      <div className={styles.right__container}>
        <a href="">
          <button className={styles.button}>Reserve</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
