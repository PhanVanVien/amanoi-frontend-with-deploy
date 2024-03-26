import React, { useState } from "react";
import styles from "../ManageReservations.module.css";

const FilterBar = ({ selectedType, onTypeChange }) => {
  return (
    <div className={styles.type_reservation_container}>
      <div
        className={`${styles.diff_type_reservation} ${styles.processing} ${
          selectedType === "processing" && styles.diff_selected
        }`}
        onClick={() => onTypeChange("processing")}
      >
        <span>Processing</span>
      </div>
      <div
        className={`${styles.type_reservation} ${styles.completed} ${
          selectedType === "completed" && styles.selected
        }`}
        onClick={() => onTypeChange("completed")}
      >
        <span>Completed</span>
      </div>
      <div
        className={`${styles.type_reservation} ${styles.canceled} ${
          selectedType === "canceled" && styles.selected
        }`}
        onClick={() => onTypeChange("canceled")}
      >
        <span>Canceled</span>
      </div>
    </div>
  );
};

export default FilterBar;
