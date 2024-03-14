import React, { useContext } from "react";
import styles from "./Header.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import logo from "../../assets/images/logocen.png";
import "./style.css";
import { LanguageContext } from "../Utils/LanguageContext";
import { withNamespaces } from "react-i18next";
import i18n from "../../i18n";

const Header = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

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
        <select
          className={styles.language__container}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en" className={styles.language__item}>
            {t("English")}
          </option>
          <option value="vi" className={styles.language__item}>
            {t("Vietnamese")}
          </option>
        </select>
        <a href="">
          <button className={styles.button}>{t("Reserve")}</button>
        </a>
      </div>
    </div>
  );
};

export default withNamespaces()(Header);
