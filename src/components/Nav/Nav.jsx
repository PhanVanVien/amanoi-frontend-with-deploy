import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import navigation from "./navigation.json";
import { withNamespaces } from "react-i18next";

const Nav = ({ t }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <NavLink
            className={styles.brand}
            aria-current="page"
            to={"/"}
            onClick={() => {
              document.title =
                "Luxury Hotel & Beach Resort in Ninh Thuan, Vietnam - Amanoi";
            }}
          >
            AMANOI
          </NavLink>
        </li>
        {navigation.map((item, index) => (
          <li className={styles.item} key={index}>
            <NavLink
              className={styles.index}
              aria-current="page"
              to={item.path}
              style={({ isActive }) => {
                return isActive
                  ? {
                      paddingBottom: "4px",
                      content: "",
                      width: "100%",
                      top: 0,
                      bottom: 0,
                      backgroundImage: "linear-gradient(90deg, black, black)",
                      backgroundSize: "100% 1px",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left bottom",
                    }
                  : {};
              }}
              onClick={() => (document.title = item.helmet)}
            >
              {t(item.title)}
            </NavLink>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default withNamespaces()(Nav);
