import React from "react";
import styles from "./Room.module.css";
import { MdPerson } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";
import { FaHandHolding } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import { BsFillClockFill } from "react-icons/bs";
import FilterRoom from "../FilterRoom/FilterRoom";
import RoomItem from "../RoomItem/RoomItem";

const Room = () => {
  return (
    <div className={styles.container}>
      <div>
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
        <div className={styles.title_select}>Select a Room</div>
        <FilterRoom />
        <RoomItem />
        <RoomItem />
      </div>
      <div>
        <div className={styles.form_reservation}>
          <div className={styles.form_check}>
            <span className={styles.title_reservation}>
              Your stay at Amanoi
            </span>
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
                Thu, Mar 14, 2024 - Fri, Mar 15, 2024
              </div>
              <div className={styles.hour}>1 Adult, 1 Child</div>
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
                Awe-inspiring locations with 35 resorts and hotels in 20
                locations
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
