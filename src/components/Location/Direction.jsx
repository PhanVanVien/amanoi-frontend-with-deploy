import React from "react";
import styles from "./Direction.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoAirplaneOutline } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { PiTaxi } from "react-icons/pi";

const Direction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <div className={styles.image}>
          <img src="https://www.aman.com/sites/default/files/styles/property_map_extra_large/public/2023-07/Southeast%20Asia%20Map.jpeg?itok=x_xfNYuK"></img>
          <div className={styles.direction}>
            <div className={styles.location}>
              <CiLocationOn style={{ marginRight: "10px" }} size={24} />
              <div className={styles.direction__text}>
                <div>Vinh Hy Village</div>
                <div>Vinh Hai Commune</div>
                <div>Ninh Thuan Province</div>
                <div>Vietnam</div>
              </div>
            </div>
            <div>
              <div className={styles.text}>
                <IoPaperPlaneOutline
                  size={24}
                  style={{ marginRight: "10px" }}
                />
                <div>Cam Ranh Airport (CXR)</div>
              </div>
              <div className={styles.text}>
                <PiTaxi size={24} style={{ marginRight: "10px" }} />
                <div>A 75-minute drive</div>
              </div>
            </div>
            <div className={styles.direction__text}>
              <a href="" style={{ color: "black" }}>
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
