import React, { useEffect, useState } from "react";
import styles from "./ManageRooms.module.css";
import { FaPlus } from "react-icons/fa";
import {
  addNewRoom,
  deleteRoom,
  editRoom,
  getAllRooms,
} from "../../Utils/ApiFunctions";
import { MdModeEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal/Modal";
import ModalConfirmation from "./Modal/ModalConfirmation/ModalConfirmation";

const ManageRooms = () => {
  const [titleModal, setTitleModal] = useState("");
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllRooms();
      setRooms(data);
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
          toast.success("Update room successful");
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
            <th>#</th>
            <th>Name</th>
            <th>Type</th>
            <th>View</th>
            <th>Price</th>
            <th>Area</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((item, index) => (
            <tr key={item.id}>
              <td style={{ fontWeight: "bold" }}>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.view}</td>
              <td>${item.price}</td>
              <td>
                {item.area}m<sup>2</sup>
              </td>
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
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ManageRooms;
