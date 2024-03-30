import React from "react";
import styles from "./DetailReserve.module.css";
import { RiVipCrownLine } from "react-icons/ri";
import { FaHandHolding } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";

const DetailReserve = ({ data }) => {
  return (
    <div>
      <div className={styles.form_reservation}>
        <div className={styles.form_check}>
          <span className={styles.title_reservation}>Your stay at Amanoi</span>
          <div className={styles.date}>
            <div className={styles.hour}>
              <span className={styles.title}>Check-In</span>
              <span>After 3:00 PM</span>
            </div>
            <div className={styles.hour}>
              <span className={styles.title}>Check-Out</span>
              <span>Before 3:00 PM</span>
            </div>
          </div>
          <div>
            <div className={styles.hour}>
              {data.checkInDate.toDateString()} -{" "}
              {data.checkOutDate.toDateString()}
            </div>
            <div className={styles.hour}>
              {data.adult} Adult, {data.child} Child
            </div>
          </div>
        </div>
        <div className={styles.total}>
          <span className={styles.total_title}>Total:</span>
          <span className={styles.total_title}>$0.00</span>
        </div>
        <div className={styles.information}>
          <span className={styles.title_reservation}>
            Book direct for peace of mind
          </span>
          <div className={styles.information_item}>
            <BsFillClockFill size={40} style={{ marginRight: "10px" }} />
            <span>
              24/7 Dedicated Global Reservation Team offering personalised
              service
            </span>
          </div>
          <div className={styles.information_item}>
            <FaHandHolding size={40} style={{ marginRight: "10px" }} />
            <span>
              Exclusive offers with inspiring itineraries, only when booking
              direct
            </span>
          </div>
          <div className={styles.information_item}>
            <RiVipCrownLine size={40} style={{ marginRight: "10px" }} />
            <span>
              A range of unique experiences to enhance your stay, accessible
              online
            </span>
          </div>
          <div className={styles.information_item}>
            <IoGlobeSharp size={40} style={{ marginRight: "10px" }} />
            <span>
              Awe-inspiring locations with 35 resorts and hotels in 20 locations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReserve;
