import React, { useState, useEffect } from "react";
import styles from "./Room.module.css";
import FilterRoom from "../FilterRoom/FilterRoom";
import RoomItem from "../RoomItem/RoomItem";
import DetailReserve from "../DetailReserve/DetailReserve";
import SearchRoom from "../SearchRoom/SearchRoom";
import { diff } from "../../Utils/diff";
import InformationReservation from "../InformationReservation/InformationReservation";

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

  const [openInformation, setOpenInformation] = useState(false);

  const handleOpenInformation = () => {
    setOpenInformation(!openInformation);
  };

  const onClick = (room) => {
    setRoom(room);
    handleOpenInformation(!openInformation);
  };

  const onClose = () => {
    handleOpenInformation(!openInformation);
  };

  return (
    <div className={styles.container}>
      <div>
        <SearchRoom data={data} setData={setData} />
        <FilterRoom />
        {openInformation ? (
          <InformationReservation onClose={onClose} data={data} room={room} />
        ) : (
          <RoomItem data={data} onClick={onClick} />
        )}
      </div>
      <DetailReserve data={data} room={room} setRoom={setRoom} />
    </div>
  );
};

export default Room;
