import React, { useState, useEffect } from "react";
import styles from "./Room.module.css";
import FilterRoom from "../FilterRoom/FilterRoom";
import RoomItem from "../RoomItem/RoomItem";
import DetailReserve from "../DetailReserve/DetailReserve";
import SearchRoom from "../SearchRoom/SearchRoom";

const Room = () => {
  const [data, setData] = useState({
    adult: 1,
    child: 0,
    checkInDate: new Date(),
    checkOutDate: (() => {
      const nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    })(),
  });

  const [room, setRoom] = useState({});

  const onClick = (item) => {
    console.table(item);
    setRoom(item);
  };

  return (
    <div className={styles.container}>
      <div>
        <SearchRoom data={data} setData={setData} />
        <FilterRoom />
        <RoomItem data={data} onClick={onClick} />
      </div>
      <DetailReserve data={data} />
    </div>
  );
};

export default Room;
