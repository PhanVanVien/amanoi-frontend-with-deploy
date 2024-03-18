import React, { useContext } from "react";
import styles from "./Header.module.css";
import { CiMenuBurger } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import logo from "../../assets/images/logocen.png";
// import "./style.css";
import { LanguageContext } from "../Utils/LanguageContext";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left__container}>
        <CiMenuBurger size={28} /> <a style={{ marginLeft: "28px" }}>Menu</a>{" "}
        <HiMagnifyingGlass style={{ marginLeft: "50px" }} size={20} />
        <select
          className={styles.language__container}
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en" className={styles.language__item}>
            English
          </option>
          <option value="vi" className={styles.language__item}>
            Vietnamese
          </option>
        </select>
      </div>
      <div className={styles.logo}>
        <a href="http://localhost:5173/">
          <img src={logo} height={40} />
        </a>
      </div>
      <div className={styles.right__container}>
        <div className="dropdown">
          <button className="dropbtn" style={{ marginRight: "20px" }}>
            Account
          </button>
          <div className="dropdown-content">
            <Link to={"/login"} onClick={() => (document.title = "Login")}>
              Login
            </Link>
            <Link to={"/admin"} onClick={() => (document.title = "Admin")}>
              Administration
            </Link>
            <Link to={"/logout"}>Logout</Link>
          </div>
        </div>

        <Link to="/reserve">
          <button className={styles.button}>Reserve</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
