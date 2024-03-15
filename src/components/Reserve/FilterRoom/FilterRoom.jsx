import React from "react";
import styles from "./FilterRoom.module.css";
import { MdArrowDropDown } from "react-icons/md";

const FilterRoom = () => {
  return (
    <>
      <div className={styles.title_select}>Select a Room</div>
      <div className={styles.container}>
        <div className={styles.filter}>
          <span>Sort By</span>
          <div className={styles.filter_dropdown}>
            <span>Recommended</span> <MdArrowDropDown size={24} />
          </div>
        </div>
        <div>
          <div className={styles.filter_dropdown}>
            <span>Show Filters</span> <MdArrowDropDown size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterRoom;
