import React from "react";
import styles from "./DetailsReservation.module.css";

const DetailsReservation = ({ reservation }) => {
  const {
    confirmationCode,
    prefix,
    lastName,
    dateCreated,
    email,
    phone,
    adult,
    child,
    room: { name, type, view } = {},
    checkInDate,
    checkOutDate,
    specialRequests,
    totalPrice,
  } = reservation;

  function diff(checkInDate, checkOutDate) {
    const checkInDateConvert = new Date(checkInDate);
    const checkOutDateConvert = new Date(checkOutDate);
    // Calculate the difference in milliseconds
    const differenceInMs =
      checkOutDateConvert.getTime() - checkInDateConvert.getTime();
    // Convert the difference to days
    const differenceInDays = differenceInMs / (1000 * 3600 * 24);
    return differenceInDays;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>Reservation #{confirmationCode}</span>
      </div>
      <div className={styles.content_group}>
        <span className={styles.label}>Customer:</span>
        <span className={styles.text}>
          {prefix} {lastName}
        </span>
      </div>
      <div className={styles.content_reservation_container}>
        <div className={styles.left_content}>
          <div className={styles.content_group}>
            <span className={styles.label}>Email:</span>
            <span className={styles.text}>{email}</span>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.content_group}>
            <span className={styles.label}>Phone:</span>
            <span className={styles.text}>{phone}</span>
          </div>
        </div>
      </div>
      <div className={styles.content_group}>
        <span className={styles.label}>Date created:</span>
        <span className={styles.text}>
          {new Date(dateCreated).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </span>
      </div>
      <div className={styles.content_reservation_container}>
        <div className={styles.left_content}>
          <div className={styles.content_group}>
            <span className={styles.label}>Check-in Date:</span>
            <span className={styles.text}>
              {new Date(checkInDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
          <div className={styles.content_group}>
            <span className={styles.label}>Adults:</span>
            <span className={styles.text}>{adult}</span>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.content_group}>
            <span className={styles.label}>Check-out Date:</span>
            <span className={styles.text}>
              {new Date(checkOutDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
          <div className={styles.content_group}>
            <span className={styles.label}>Children:</span>
            <span className={styles.text}>{child}</span>
          </div>
        </div>
      </div>

      <div className={styles.content_group}>
        <span className={styles.label}>Room:</span>
        <span className={styles.text}>{name}</span>
      </div>

      <div className={styles.content_reservation_container}>
        <div className={styles.left_content}>
          <div className={styles.content_group}>
            <span className={styles.label}>Type:</span>
            <span className={styles.text}>{type}</span>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.content_group}>
            <span className={styles.label}>View:</span>
            <span className={styles.text}>{view}</span>
          </div>
        </div>
      </div>

      <div className={styles.content_group}>
        <span className={styles.label}>Number of Nights:</span>
        <span className={styles.text}>
          {diff(checkInDate, checkOutDate) > 1
            ? `${diff(checkInDate, checkOutDate)} days`
            : `${diff(checkInDate, checkOutDate)} day`}
        </span>
      </div>
      <div className={styles.content_group}>
        <span className={styles.label}>Special Requests:</span>
        <span className={styles.text}>{specialRequests}</span>
      </div>
      <div className={styles.title_container}>
        <span className={styles.price}>Total:</span>
        <span className={styles.price}>{totalPrice} $</span>
      </div>
    </div>
  );
};

export default DetailsReservation;
