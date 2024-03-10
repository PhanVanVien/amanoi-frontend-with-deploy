import React from "react";
import styles from "./Location.module.css";

const Location = () => {
  return (
    <div className={styles.location__container}>
      <div className={styles.container}>
        <h1>Getting here</h1>
        <p>
          Amanoi is a 75 minute drive from Cam Ranh Airport (CXR). By air, Cam
          Ranh is 70 minutes from Ho Chi Minh City, 105 minutes from Hanoi, or
          65 minutes from Danang.
          <br />
          <br /> Travel for 5-hours by car from Ho Chi Minh City to Amanoi via
          the highway.
          <br />
          <br /> Direct international flights to Cam Ranh Airport (CXR) from
          Hong Kong, Seoul, Busan, Bangkok, Kuala Lumpur, Guangzhou, Chengdu,
          Kunming and Almaty (Kazakhstan). <br />
          <br />
          Our multilingual reservations team is always available to help with
          travel planning, from booking a single night to multi-resort
          itineraries.
        </p>
      </div>
    </div>
  );
};

export default Location;
