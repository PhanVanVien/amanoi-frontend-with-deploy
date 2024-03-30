import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchRoom.module.css";
import { MdPerson } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import CustomButton from "../../Common/CustomButton";
import DateRangePicker from "rsuite/DateRangePicker";

import "rsuite/DateRangePicker/styles/index.css";
import { getMaxAdult, getMaxChild } from "../../Utils/ApiFunctions";
import { formatDate } from "../../Utils/formatDate";
const SearchRoom = ({ data, setData }) => {
  const [openGuestsSelection, setOpenGuestsSelection] = useState(false);
  const dropdownRef = useRef(null);
  const [tempData, setTempData] = useState(data);
  const [maxChild, setMaxChild] = useState(0);
  const [maxAdult, setMaxAdult] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenGuestsSelection(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchMaxAdult = async () => {
    try {
      const response = await getMaxAdult();
      setMaxAdult(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMaxChild = async () => {
    try {
      const response = await getMaxChild();
      setMaxChild(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMaxAdult();
    fetchMaxChild();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setTempData({ ...tempData, [id]: value });
  };

  const handleGuestsSelection = () => {
    setOpenGuestsSelection(!openGuestsSelection);
  };

  const saveData = () => {
    setData(tempData);
    setOpenGuestsSelection(!openGuestsSelection);
  };

  const [value, setValue] = useState([
    tempData.checkInDate,
    tempData.checkOutDate,
  ]);

  const handleDateChange = (e) => {
    if (e !== null && formatDate(e[0]) !== formatDate(e[1])) {
      setValue(e);
      setTempData({ ...tempData, checkInDate: e[0], checkOutDate: e[1] });
    }
  };

  const handleSave = (e) => {
    setData({ ...tempData, checkInDate: e[0], checkOutDate: e[1] });
  };

  const reset = () => {
    setValue([
      new Date(),
      (() => {
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
      })(),
    ]);
    setData({
      ...tempData,
      checkInDate: new Date(),
      checkOutDate: (() => {
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay;
      })(),
    });
  };

  return (
    <>
      <div className={styles.accommodation}>
        <div className={styles.option}>
          <div className={styles.cell} ref={dropdownRef}>
            <div
              className={styles.option_container}
              onClick={handleGuestsSelection}
            >
              <div className={styles.icon}>
                <MdPerson size={30} style={{ marginRight: "10px" }} />
              </div>
              <div className={styles.option_text}>
                <span className={styles.title}>Guests</span>
                <span>
                  {data.adult} Adult, {data.child} Child
                </span>
              </div>
            </div>
            {openGuestsSelection && (
              <div className={styles.dropdown_content_guests}>
                <div className={styles.container_input}>
                  <span className={styles.label}>Adult</span>
                  <input
                    className={styles.input}
                    type="number"
                    id="adult"
                    min={1}
                    max={maxAdult}
                    value={tempData.adult}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.container_input}>
                  <span className={styles.label}>Child</span>
                  <input
                    className={styles.input}
                    type="number"
                    id="child"
                    min={0}
                    max={maxChild}
                    value={tempData.child}
                    onChange={handleInputChange}
                  />
                </div>
                <CustomButton title={"Save"} onClick={saveData} />
              </div>
            )}
          </div>
          <div className={styles.container_date}>
            <div className={styles.date}>
              <DateRangePicker
                format="dd/MM/yyyy"
                character=" – "
                size="lg"
                editable={false}
                caretAs={IoMdCalendar}
                // placeholder={`${data.checkInDate.toDateString()} - ${data.checkOutDate.toDateString()}`}
                label="Check-in - Check-out: "
                showHeader={false}
                block
                ranges={[]}
                onChange={handleDateChange}
                value={value}
                onOk={handleSave}
                onClean={reset}
              />
            </div>
          </div>
        </div>
        <div className={styles.filter_dropdown}>
          <span>Special Codes</span> <MdArrowDropDown size={24} />
        </div>
        <div className={styles.promo}>Promo Code</div>
      </div>
    </>
  );
};

export default SearchRoom;
