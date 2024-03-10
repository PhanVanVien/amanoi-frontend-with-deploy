import React from "react";
import styles from "./LocationInfo.module.css";
import Location from "./Location";
import Direction from "./Direction";

const LocationInfo = () => {
  return (
    <div>
      <Location />
      <Direction />
    </div>
  );
};

export default LocationInfo;
