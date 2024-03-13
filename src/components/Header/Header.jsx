import React from "react";
import styles from "./Header.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import logo from "../../assets/images/logocen.png";
import "./style.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left__container}>
        <CiMenuBurger size={28} /> <a style={{ marginLeft: "28px" }}>Menu</a>{" "}
        <HiMagnifyingGlass style={{ marginLeft: "50px" }} size={20} />
      </div>
      <div className={styles.logo}>
        <a href="http://localhost:5173/">
          <img src={logo} height={40} />
        </a>
      </div>
      <div className={styles.right__container}>
        <select className={styles.language__container}>
          <option className={styles.language__item}>English</option>
          <option className={styles.language__item}>Vietnamese</option>
        </select>
        <a href="">
          <button className={styles.button}>Reserve</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
