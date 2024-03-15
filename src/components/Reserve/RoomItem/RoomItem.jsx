import React from "react";
import styles from "./RoomItem.module.css";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import CustomButton from "../../Common/CustomButton";
const RoomItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          height={170}
          width={275.85}
        ></img>
      </div>
      <div className={styles.content}>
        <div className={styles.main_content}>
          <div className={styles.name}>Mountain Pavilion</div>
          <div className={styles.area}>
            <span
              style={{ paddingRight: "10px", borderRight: "1px solid #cccccc" }}
            >
              1 King
            </span>
            <span style={{ paddingLeft: "10px" }}>95 m²</span>
          </div>
          <div>
            Offering a combined bedroom and living area with an extensive timber
            sundeck, the 95m2 (1,022 sq.ft)
          </div>
          <div className={styles.link}>Room details</div>
        </div>
        <div className={styles.additional_content}>
          <div>
            <div className={styles.link}>Standard Daily Rate</div>
            <div className={styles.breakfast}>
              <BiSolidCoffeeAlt size={20} style={{ marginRight: "5px" }} />
              Breakfast Included
            </div>
            <div>The stay includes</div>
            <div className={styles.bonus}>Daily breakfast for two</div>
          </div>
          <div className={styles.left_additional}>
            <div className={styles.cost}>$1,400</div>
            <div className={styles.night}>Per Night</div>
            <div className={styles.tax}>Excluding Taxes & Fees</div>
            <div className={styles.button_container}>
              <CustomButton title={"Book Now"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
