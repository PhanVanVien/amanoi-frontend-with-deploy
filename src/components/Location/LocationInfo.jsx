import React from "react";
import styles from "./LocationInfo.module.css";
import Location from "./Location";
import Direction from "./Direction";

const LocationInfo = () => {
  return (
    <div style={{ flex: 1 }}>
      <Location />
      <Direction />
    </div>
  );
};

export default LocationInfo;
