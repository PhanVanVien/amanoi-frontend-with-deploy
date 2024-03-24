import React, { useEffect, useState } from "react";
import styles from "./RoomItem.module.css";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import CustomButton from "../../Common/CustomButton";
import { getAllRooms } from "../../Utils/ApiFunctions";
const RoomItem = () => {
  const baseUrl = "http://localhost:8080/rooms/images/";
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllRooms();
      setRooms(data);
    } catch (error) {}
  };

  return (
    <>
      {rooms.map((item) => (
        <div key={item.roomId} className={styles.container}>
          <div className={styles.content}>
            <img
              src={`${baseUrl}${item.image}`}
              height={170}
              width={275.85}
            ></img>
          </div>
          <div className={styles.content}>
            <div className={styles.main_content}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.area}>
                <span
                  style={{
                    paddingRight: "10px",
                    borderRight: "1px solid #cccccc",
                  }}
                >
                  {item.type}
                </span>
                <span style={{ paddingLeft: "10px" }}>{item.area} m²</span>
              </div>
              <div>{item.details}</div>
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
                <div className={styles.cost}>${item.price}</div>
                <div className={styles.night}>Per Night</div>
                <div className={styles.tax}>Excluding Taxes & Fees</div>
                <div className={styles.button_container}>
                  <CustomButton title={"Book Now"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RoomItem;
