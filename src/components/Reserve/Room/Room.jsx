import React, { useState } from "react";
import styles from "./Room.module.css";
import FilterRoom from "../FilterRoom/FilterRoom";
import RoomItem from "../RoomItem/RoomItem";
import DetailReserve from "../DetailReserve/DetailReserve";
import SearchRoom from "../SearchRoom/SearchRoom";

const Room = () => {
  const [data, setData] = useState({
    adult: 1,
    child: 0,
    checkInDate: Date.now(),
    checkOutDate: "",
  });

  return (
    <div className={styles.container}>
      <div>
        <SearchRoom data={data} setData={setData} />
        <FilterRoom />
        <RoomItem />
      </div>
      <DetailReserve data={data} />
    </div>
  );
};

export default Room;
