import React, { useState } from "react";
import styles from "./InformationReservation.module.css";
import prefix from "./prefix.json";
import CustomButton from "../../Common/CustomButton";
import { BsArrowLeft } from "react-icons/bs";
import { reserve } from "../../Utils/ApiFunctions";
import { toast } from "react-toastify";

const InformationReservation = ({ onClose, data, room }) => {
  const [information, setInformation] = useState({
    prefix: "Mr.",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInformation({ ...information, [id]: value });
  };

  const handleReservation = async () => {
    try {
      const response = await reserve(information, room, data);

      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.header_form}>
          <div className={styles.back} onClick={onClose}>
            <BsArrowLeft size={20} style={{ marginRight: "5px" }} />
            Back to Room Selection
          </div>
          <div className={styles.bg_text}>Your information</div>
        </div>
      </div>
      <div className={styles.info_outer}>
        <div className={styles.info_container}>
          <div style={{ display: "flex" }}>
            <div className={styles.input_group}>
              <label className={styles.label}>Prefix</label>
              <select
                className={styles.input}
                id="prefix"
                value={information.prefix}
                onChange={handleInputChange}
              >
                {prefix.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.input_group}>
              <label htmlFor="firstName" className={styles.label}>
                First name
              </label>
              <input
                className={styles.input}
                id="firstName"
                value={information.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input_group}>
              <label htmlFor="lastName" className={styles.label}>
                Last name
              </label>
              <input
                className={styles.input}
                id="lastName"
                value={information.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }} className={styles.input_group}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                className={styles.input}
                id="email"
                value={information.email}
                onChange={handleInputChange}
              />
            </div>
            <div style={{ flex: 1 }} className={styles.input_group}>
              <label htmlFor="phone" className={styles.label}>
                Phone
              </label>
              <input
                className={styles.input}
                id="phone"
                value={information.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className={styles.input_group}>
              <label htmlFor="specialRequests" className={styles.label}>
                Special Requests
              </label>
              <textarea
                className={styles.input}
                id="specialRequests"
                value={information.specialRequests}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.button_container}>
            <CustomButton title={"Confirm"} onClick={handleReservation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationReservation;
