import React, { useEffect, useState } from "react";
import styles from "./ManageRooms.module.css";
import { FaPlus } from "react-icons/fa";
import {
  addNewRoom,
  deleteRoom,
  editRoom,
  getAllRooms,
  getAllRoomsByPageAndLimit,
} from "../../Utils/ApiFunctions";
import { MdModeEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal/Modal";
import ModalConfirmation from "./Modal/ModalConfirmation/ModalConfirmation";
import ReactPaginate from "react-paginate";

const ManageRooms = () => {
  const [titleModal, setTitleModal] = useState("");
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [id, setId] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(8);
  const [totalRecords, setTotalRecords] = useState();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const data = await getAllRoomsByPageAndLimit(currentPage, limit);
      setRooms(data.rooms);
      // setTotalRecords(data.totalRecords);
      setTotalPages(data.totalPages);
    } catch (error) {}
  };

  const openModal = (title, room) => {
    setTitleModal(title);
    setSelectedRoom(room);
    setIsEditing(!!room);

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeConfirmation = () => {
    setIsConfirm(false);
  };

  const openConfirm = (id) => {
    setIsConfirm(true);
    setId(id);
  };

  const handleDelete = async () => {
    try {
      const result = await deleteRoom(id);
      if (result === "") {
        fetchData();
        toast.success(`Delete room ${id} successful`);
      } else {
        toast.error(`${result}`);
      }
    } catch (error) {}
  };

  const onSubmit = async (room) => {
    try {
      if (isEditing) {
        const response = await editRoom(room.id, room);
        if (response !== undefined) {
          toast.success(`Successfully update room ${room.id}`);
          closeModal();
          fetchData();
        } else {
          toast.error("Update room failed");
        }
      } else {
        const response = await addNewRoom(room);
        if (response !== undefined) {
          toast.success("Add room successful");
          closeModal();
          fetchData();
        } else {
          toast.error("Add room failed");
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };
  return (
    <>
      <Modal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={onSubmit}
        title={titleModal}
        room={selectedRoom}
        isEditing={isEditing}
      />
      <ModalConfirmation
        isConfirm={isConfirm}
        onClose={closeConfirmation}
        onSubmit={handleDelete}
      />
      <button className={styles.addbtn} onClick={() => openModal("Add Room")}>
        <FaPlus size={16} style={{ marginRight: "5px" }} />
        <span>Add Room</span>
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>View</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Price ($)</th>
            <th>
              Area (m<sup>2</sup>)
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {rooms.map((item, index) => (
            <tr key={item.id}>
              <td style={{ fontWeight: "bold" }}>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.view}</td>
              <td>{item.adult}</td>
              <td>{item.children}</td>
              <td>{item.price}</td>
              <td>{item.area}</td>
              <td style={{ display: "flex" }}>
                <button
                  className={`${styles.actionbtn} ${styles.edit}`}
                  style={{ marginRight: "5px" }}
                >
                  <MdModeEdit
                    size={20}
                    onClick={() => openModal("Edit Room", item)}
                  />
                </button>
                <button className={`${styles.actionbtn} ${styles.delete}`}>
                  <MdDelete size={20} onClick={() => openConfirm(item.id)} />
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
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
      />
    </>
  );
};

export default ManageRooms;
