import React, { useEffect, useState } from "react";
import styles from "./ManageReservations.module.css";
import { getReservations, updateStatus } from "../../Utils/ApiFunctions";
import { FaEye } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import FilterBar from "./Filter/FilterBar";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

const ManageReservations = () => {
  const [selectedType, setSelectedType] = useState("processing");
  const [reservations, setReservations] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(8);

  const getStatusStyle = (status) => {
    switch (status) {
      case "PENDING":
        return styles.pending_status;
      case "CONFIRMED":
        return styles.confirmed_status;
      case "CHECKED_IN":
        return styles.checkedIn_status;
      case "CHECKED_OUT":
        return styles.checkedOut_status;
      case "COMPLETED":
        return styles.completed_status;
      case "CANCELED":
        return styles.canceled_status;
      default:
        return "";
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedType]);

  const fetchData = async () => {
    try {
      const response = await getReservations(selectedType, currentPage, limit);
      setReservations(response.data);
      setTotalPages(response.totalPages);
    } catch (error) {}
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setCurrentPage(0);
  };

  const [loading, setLoading] = useState(false);

  const handleChange = async (reservationId, e) => {
    await toast.promise(updateStatus(reservationId, e), {
      pending: "Processing",
      success: "Successful",
      error: "Fail",
    });
    fetchData();
  };

  const copyEmailToClipboard = (email) => {
    navigator.clipboard.writeText(email);
  };

  return (
    <>
      <FilterBar selectedType={selectedType} onTypeChange={handleTypeChange} />
      <table>
        <thead>
          <tr>
            <th style={{ whiteSpace: "nowrap" }}>Confirm. ID</th>
            <th style={{ whiteSpace: "nowrap" }}>Customer</th>
            <th style={{ whiteSpace: "nowrap" }}>Email</th>
            <th style={{ whiteSpace: "nowrap" }}>Phone</th>
            <th style={{ whiteSpace: "nowrap" }}>Check-in</th>
            <th style={{ whiteSpace: "nowrap" }}>Check-out</th>
            <th style={{ whiteSpace: "nowrap" }}>Room</th>
            <th style={{ whiteSpace: "nowrap" }}>Total ($)</th>
            <th style={{ whiteSpace: "nowrap" }}>Status</th>
            <th style={{ whiteSpace: "nowrap" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.reservationId}>
              <td style={{ fontWeight: "bold" }}>
                {reservation.confirmationCode.replace("AUG31ST", "")}
              </td>
              <td style={{ whiteSpace: "nowrap" }}>
                {reservation.lastName} {reservation.firstName}
              </td>
              <td
                style={{ whiteSpace: "nowrap", cursor: "copy" }}
                onClick={() => copyEmailToClipboard(reservation.email)}
              >
                <span
                  data-tooltip-content="Click to copy"
                  data-tooltip-id={`email-tooltip-${reservation.reservationId}`}
                >
                  {reservation.email.replace("@gmail.com", "")}
                </span>
              </td>
              <td style={{ whiteSpace: "nowrap" }}>{reservation.phone}</td>
              <td style={{ whiteSpace: "nowrap" }}>
                {new Date(reservation.checkInDate).toLocaleDateString("en-US", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td style={{ whiteSpace: "nowrap" }}>
                {new Date(reservation.checkOutDate).toLocaleDateString(
                  "en-US",
                  {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  }
                )}
              </td>
              <td style={{ whiteSpace: "nowrap" }}>{reservation.room.name}</td>
              <td style={{ whiteSpace: "nowrap" }}>{reservation.totalPrice}</td>
              <td style={{ whiteSpace: "nowrap" }}>
                <select
                  className={getStatusStyle(reservation.status)}
                  value={reservation.status}
                  onChange={(e) =>
                    handleChange(reservation.reservationId, e.target.value)
                  }
                >
                  <option value={reservation.status}>
                    {reservation.status}
                  </option>
                  {reservation.status === "PENDING" && (
                    <option value={"CONFIRMED"}>CONFIRMED</option>
                  )}
                  {reservation.status === "CONFIRMED" && (
                    <option value={"CHECKED_IN"}>CHECKED_IN</option>
                  )}
                  {reservation.status === "CHECKED_IN" && (
                    <option value={"CHECKED_OUT"}>CHECKED_OUT</option>
                  )}
                  {reservation.status === "CHECKED_OUT" && (
                    <option value={"COMPLETED"}>COMPLETED</option>
                  )}
                  {reservation.status === "PENDING" && (
                    <option value={"CANCELED"}>CANCELED</option>
                  )}
                </select>
              </td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  whiteSpace: "nowrap",
                }}
              >
                <button
                  className={`${styles.actionbtn} ${styles.view}`}
                  style={{ marginRight: "5px" }}
                >
                  <FaEye
                    size={20}
                    onClick={() => openModal("Edit Room", item)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {reservations.map((reservation) => (
        <Tooltip
          key={`tooltip-${reservation.reservationId}`}
          id={`email-tooltip-${reservation.reservationId}`}
          place="top"
          effect="solid"
        />
      ))}
      {totalPages > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => handlePageClick(e)}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className={styles.paginate}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          activeClassName={"activePage"}
          forcePage={currentPage}
        />
      )}
    </>
  );
};

export default ManageReservations;
