import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchRoom.module.css";
import { MdPerson } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import CustomButton from "../../Common/CustomButton";
import DateRangePicker from "rsuite/DateRangePicker";

import "rsuite/DateRangePicker/styles/index.css";
const SearchRoom = ({ data, setData }) => {
  const [openGuestsSelection, setOpenGuestsSelection] = useState(false);
  const dropdownRef = useRef(null);
  const [tempData, setTempData] = useState(data);
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

  const hello = () => {
    console.log("Heloo");
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
                    value={tempData.child}
                    onChange={handleInputChange}
                  />
                </div>
                <CustomButton title={"Save"} onClick={saveData} />
              </div>
            )}
          </div>

          {/* <div
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
          </div> */}
          <div className={styles.container_date}>
            <div className={styles.date}>
              <DateRangePicker
                format="dd/MM/yyyy"
                character=" – "
                size="lg"
                editable={false}
                caretAs={IoMdCalendar}
                label="Check-in - Check-out: "
                showHeader={false}
                block
                ranges={[]}
                onOk={hello}
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
