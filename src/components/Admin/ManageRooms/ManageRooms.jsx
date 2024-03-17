import React, { useEffect, useState } from "react";
import styles from "./ManageRooms.module.css";
import { FaPlus } from "react-icons/fa";
import { addNewRoom, deleteRoom, getAllRooms } from "../../Utils/ApiFunctions";
import { MdModeEdit } from "react-icons/md";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import ModalAddRoom from "./ModalAddRoom/ModalAddRoom";

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getAllRooms();
      setRooms(data);
    } catch (error) {}
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const result = await deleteRoom(id);
      if (result === "") {
        fetchData();
        toast.success(`Delete room ${id} successful`);
      } else {
      }
    } catch (error) {}
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (room) => {
    try {
      const response = await addNewRoom(room);

      if (response !== undefined) {
        toast.success("Add room successful");
        closeModal();
        fetchData();
      } else {
        toast.error("Add room fail");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <ModalAddRoom
        isModalOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={onSubmit}
      />
      <button className={styles.addbtn} onClick={() => openModal()}>
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
                  className={styles.actionbtn}
                  style={{ marginRight: "5px" }}
                >
                  <MdModeEdit size={20} />
                </button>
                <button className={styles.actionbtn}>
                  <MdDelete size={20} onClick={() => handleDelete(item.id)} />
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
