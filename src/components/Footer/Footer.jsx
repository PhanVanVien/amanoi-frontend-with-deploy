import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logocen.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaArrowCircleUp } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <img height={30} src={logo}></img>
      <div className={styles.contact__container}>
        <div className={styles.delete}>
          <a
            href="https://www.linkedin.com/in/phan-van-vien-03625b227/"
            target="_blank"
            rel=""
            className={styles.delete}
          >
            <FaLinkedinIn size={30} style={{ color: "black" }} />
          </a>
        </div>
        <div className={styles.delete}>
          <a
            href="https://github.com/PhanVanVien"
            target="_blank"
            rel=""
            className={styles.delete}
          >
            <FaGithub size={30} style={{ color: "black" }} />
          </a>
        </div>
      </div>
      <div>Copyright {currentYear}, Aug. 31st</div>
    </div>
  );
};

export default Footer;
