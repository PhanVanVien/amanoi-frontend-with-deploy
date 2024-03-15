import React from "react";
import styles from "./SearchRoom.module.css";
import { MdPerson } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const SearchRoom = () => {
  return (
    <div className={styles.accommodation}>
      <div className={styles.option}>
        <div className={styles.cell}>
          <div className={styles.option_container}>
            <div className={styles.icon}>
              <MdPerson size={30} style={{ marginRight: "10px" }} />
            </div>
            <div className={styles.option_text}>
              <span className={styles.title}>Guests</span>
              <span>1 Adult, 0 Child</span>
            </div>
          </div>
        </div>
        <div
          className={styles.cell}
          style={{
            borderRight: "1px solid #cccccc",
            borderLeft: "1px solid #cccccc",
          }}
        >
          <div className={styles.option_container}>
            <div className={styles.icon}>
              <IoMdCalendar size={30} style={{ marginRight: "10px" }} />
            </div>
            <div className={styles.option_text}>
              <span className={styles.title}>Check-In</span>
              <span>Thu, Mar 14, 2024</span>
            </div>
          </div>
        </div>
        <div className={styles.cell}>
          <div className={styles.option_container}>
            <div className={styles.icon}>
              <IoMdCalendar size={30} style={{ marginRight: "10px" }} />
            </div>
            <div className={styles.option_text}>
              <span className={styles.title}>Check-Out</span>
              <span>Fri, Mar 15, 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.filter_dropdown}>
        <span>Special Codes</span> <MdArrowDropDown size={24} />
      </div>
      <div className={styles.promo}>Promo Code</div>
    </div>
  );
};

export default SearchRoom;
