import React, { useState, useEffect, useRef } from "react";
import styles from "./AdminDashboard.module.css";
import { IoIosArrowDown } from "react-icons/io";
import ManageRooms from "./ManageRooms/ManageRooms";
import ManageReservations from "./ManageReservations/ManageReservations";
import ManageGallery from "./ManageGallery/ManageGallery";
import ManageUsers from "./ManageUsers/ManageUsers";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const AdminDashboard = () => {
  const [manageRooms, setManageRooms] = useState(false);
  const [manageReservations, setManageReservations] = useState(true);
  const [manageGallery, setManageGallery] = useState(false);
  const [manageUsers, setManageUsers] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Rooms");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleManagementSelection = (section) => {
    setOpen(!open);
    setSelectedSection(section);
    setManageRooms(false);
    setManageReservations(false);
    setManageGallery(false);
    setManageUsers(false);

    switch (section) {
      case "Rooms":
        setManageRooms(true);
        break;
      case "Reservations":
        setManageReservations(true);
        break;
      case "Gallery":
        setManageGallery(true);
        break;
      case "Users":
        setManageUsers(true);
        break;
      default:
        break;
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.outer_container}>
      <div className={styles.container}>
        <div className={styles.title_select}>
          <span className={styles.title}>
            Admin Panel
            <MdOutlineKeyboardArrowRight
              color={"#909090"}
              size={20}
              style={{ margin: "0px 10px" }}
            />
            <span className={styles.nav}>Manage</span>
            <MdOutlineKeyboardArrowRight
              color={"#909090"}
              size={20}
              style={{ margin: "0px 10px" }}
            />
            <span className={styles.nav}>{selectedSection}</span>
          </span>
          <div className={styles.dropdown} ref={dropdownRef}>
            <button className={styles.dropbtn} onClick={handleOpen}>
              <span style={{ marginRight: "10px" }}>{selectedSection}</span>
              {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {open && (
              <div className={styles.dropdown_content}>
                <button onClick={() => handleManagementSelection("Rooms")}>
                  Rooms
                </button>
                <button
                  onClick={() => handleManagementSelection("Reservations")}
                >
                  Reservations
                </button>
                <button onClick={() => handleManagementSelection("Gallery")}>
                  Gallery
                </button>
                <button onClick={() => handleManagementSelection("Users")}>
                  Users
                </button>
              </div>
            )}
          </div>
        </div>
        {manageRooms && <ManageRooms />}
        {manageReservations && <ManageReservations />}
        {manageGallery && <ManageGallery />}
        {manageUsers && <ManageUsers />}
      </div>
    </div>
  );
};

export default AdminDashboard;
