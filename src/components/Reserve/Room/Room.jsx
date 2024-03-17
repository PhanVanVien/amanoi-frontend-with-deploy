import React from "react";
import styles from "./Room.module.css";
import FilterRoom from "../FilterRoom/FilterRoom";
import RoomItem from "../RoomItem/RoomItem";
import DetailReserve from "../DetailReserve/DetailReserve";
import SearchRoom from "../SearchRoom/SearchRoom";

const Room = () => {
  return (
    <div className={styles.container}>
      <div>
        <SearchRoom />
        <FilterRoom />
        <RoomItem />
      </div>
      <DetailReserve />
    </div>
  );
};

export default Room;
