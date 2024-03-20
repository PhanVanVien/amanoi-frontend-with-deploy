import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isModalOpen, onClose, onSubmit, title, room, isEditing }) => {
  const baseURL = "http://localhost:8080/rooms/images/";
  const [previewImage, setPreviewImage] = useState(null);
  const [initRoom, setInitRoom] = useState({
    image: null,
    name: "",
    price: 0,
    area: 0,
    type: "1 King",
    view: "Lake",
    details: "",
  });

  const [roomData, setRoomData] = useState({
    image: null,
    name: "",
    price: 0,
    area: 0,
    type: "1 King",
    view: "Lake",
    details: "",
  });

  useEffect(() => {
    if (room) {
      setRoomData(room);
      setPreviewImage(`${baseURL}${room.image}`);
    }
  }, [room]);

  const handleClose = () => {
    onClose();
    if (!isEditing) {
      setRoomData(initRoom);
      setPreviewImage(null);
    }
  };

  useEffect(() => {
    if (!isEditing) {
      console.log(isEditing);
      setRoomData(initRoom);
      setPreviewImage(null);
    }
  }, [isEditing]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      setRoomData({ ...roomData, image: file });
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setRoomData({
      ...roomData,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    setPreviewImage(null);
    setRoomData(initRoom);
    onSubmit(roomData);
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className={styles.container}>
      <form className={styles.modal}>
        <div className={styles.modal_content}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.input__container}>
            <div className={styles.input__group}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                type="text"
                className={styles.input}
                value={roomData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.input__grid}>
              <div className={styles.input__group}>
                <label htmlFor="price" className={styles.label}>
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  min={0}
                  className={styles.input}
                  value={roomData.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.input__group}>
                <label htmlFor="area" className={styles.label}>
                  Area
                </label>
                <input
                  id="area"
                  type="number"
                  min={0}
                  className={styles.input}
                  value={roomData.area}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className={styles.input__group}>
              <label htmlFor="image" className={styles.label}>
                Image
              </label>
              <input
                id="image"
                type="file"
                className={styles.input}
                onChange={handleImageChange}
              />
            </div>
            <div className={styles.input__grid}>
              <div className={styles.input__group}>
                <label htmlFor="type" className={styles.label}>
                  Type
                </label>
                <select
                  id="type"
                  className={styles.input}
                  onChange={handleInputChange}
                  value={roomData.type}
                >
                  <option value="1 King">1 King</option>
                  <option value="1 Double">1 Double</option>
                  <option value="2 King">2 King</option>
                </select>
              </div>
              <div className={styles.input__group}>
                <label htmlFor="view" className={styles.label}>
                  View
                </label>
                <select
                  id="view"
                  className={styles.input}
                  onChange={handleInputChange}
                  value={roomData.view}
                >
                  <option value="Lake">Lake</option>
                  <option value="Bay">Bay</option>
                </select>
              </div>
            </div>
            <div className={styles.input__group}>
              <label htmlFor="details" className={styles.label}>
                Details
              </label>
              <textarea
                id="details"
                type="text"
                className={styles.input}
                value={roomData.details}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.button__group}>
            <div
              className={`${styles.button} ${styles.upload}`}
              onClick={() => handleSubmit()}
            >
              Save
            </div>
            <div
              className={`${styles.button} ${styles.cancel}`}
              onClick={() => handleClose()}
            >
              Cancel
            </div>
          </div>
        </div>
        {previewImage && (
          <div className={styles.image__container}>
            <div className={styles.image__zone}>
              <img
                src={previewImage}
                alt="Preview"
                height={"100%"}
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Modal;
