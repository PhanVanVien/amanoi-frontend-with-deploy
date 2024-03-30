import React, { useState } from "react";
import styles from "./ModifyReservation.module.css";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import CustomButton from "../../Common/CustomButton";
import {
  getReservationByConfirmationCode,
  getReservationByEmail,
} from "../../Utils/ApiFunctions";
import { toast } from "react-toastify";
import DetailsReservation from "./DetailsReservation";

const ModifyReservation = () => {
  const navigate = useNavigate();
  const [showConf, setshowConf] = useState(true);
  const [showEmail, setshowEmail] = useState(false);
  const [conf, setConf] = useState("");
  const [email, setEmail] = useState("");
  const [reservation, setReservation] = useState(null);
  const goBack = () => {
    navigate(-1);
  };

  const handleToggle = () => {
    setConf("");
    setEmail("");
    setshowConf(!showConf);
    setshowEmail(!showEmail);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "conf") {
      setConf(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    console.log(id, " ", value);
  };

  const getReservation = async () => {
    if (showConf === true && conf !== "") {
      try {
        const response = await getReservationByConfirmationCode(conf);
        setReservation(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        setReservation(null);
        toast.error(error.message);
      }
    }
    if (showEmail === true && email !== "") {
      try {
        const response = await getReservationByEmail(email);
        setReservation(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        setReservation(null);
        toast.error(error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.create_new} onClick={goBack}>
          <BsArrowLeft size={20} style={{ marginRight: "5px" }} />
          Create new reservation
        </span>
        <div className={styles.container_title}>
          <span className={styles.title}>MODIFY AN EXISTING RESERVATION</span>
        </div>
        {showConf && (
          <input
            className={styles.input}
            id="conf"
            type="text"
            placeholder="Confirmation Code"
            value={conf}
            onChange={handleInputChange}
          />
        )}
        {showEmail && (
          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
        )}
        <div className={styles.container_search_by} onClick={handleToggle}>
          <span className={styles.search_by}>
            {showConf ? "Search by email" : "Search by confirmation code"}
          </span>
        </div>
        <div className={styles.checkbox_group}>
          <div>
            <input id="policy" type="checkbox" />
          </div>
          <label htmlFor="policy">
            I understand that refunds are subject to the hotel's cancellation
            policy. I understand that cancellation of my reservation may cause
            penalties or charges to apply in accordance with the hotel's
            cancellation policy.
          </label>
        </div>
        <div className={styles.container_button}>
          <CustomButton
            title={"Search For Reservation"}
            onClick={getReservation}
          />
        </div>
      </div>
      {reservation && <DetailsReservation reservation={reservation} />}
    </div>
  );
};

export default ModifyReservation;
