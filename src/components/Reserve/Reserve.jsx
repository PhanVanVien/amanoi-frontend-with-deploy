import React from "react";
import styles from "./Reserve.module.css";
import { FaBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import Room from "./Room/Room";

const Reserve = () => {
  return (
    <>
      <div className={styles.parallax}>
        <div className={styles.contact}>
          <span style={{ marginBottom: "15px" }} className={styles.title}>
            Amanoi
          </span>
          <span className={styles.contactInfo} style={{ marginBottom: "10px" }}>
            <FaBuilding size={18} style={{ marginRight: "10px" }} />
            Vinh Hy Village, Vinh Hai Commune, Ninh Hai District, Ninh Thuan
            Province, Vietnam, 00000
          </span>
          <span className={styles.contactInfo} style={{ marginBottom: "10px" }}>
            <FaPhoneAlt size={18} style={{ marginRight: "10px" }} /> 0933867270
          </span>
          <span className={styles.contactInfo} style={{ marginBottom: "10px" }}>
            <FaLink size={18} style={{ marginRight: "10px" }} />{" "}
            https://github.com/PhanVanVien
          </span>
        </div>
      </div>
      <Room />
    </>
  );
};

export default Reserve;
