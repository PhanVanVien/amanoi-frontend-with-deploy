import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { getTypes, getViews } from "../../../Utils/ApiFunctions";
import { toast } from "react-toastify";

const Modal = ({ isModalOpen, onClose, onSubmit, title, room, isEditing }) => {
  const baseURL = "http://localhost:8080/rooms/images/";
  const [previewImage, setPreviewImage] = useState(null);
  const [initRoom, setInitRoom] = useState({
    image: null,
    name: "",
    price: 0,
    area: 0,
    type: "",
    view: "",
    details: "",
    adult: 0,
    children: 0,
  });

  const [roomData, setRoomData] = useState({
    image: null,
    name: "",
    price: 0,
    area: 0,
    type: "",
    view: "",
    details: "",
    adult: 0,
    children: 0,
  });

  const [types, setTypes] = useState([]);
  const [views, setViews] = useState([]);

  const fetchTypes = async () => {
    try {
      const types = await getTypes();
      setTypes(types);
    } catch (error) {}
  };

  const fetchViews = async () => {
    try {
      const views = await getViews();
      setViews(views);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTypes();
    fetchViews();
  }, [isModalOpen]);

  useEffect(() => {
    if (room) {
      setRoomData(room);
      setPreviewImage(`${baseURL}${room.image}`);
    }
  }, [room]);

  const handleClose = () => {
    onClose();
    openAddNew(false);
    if (!isEditing) {
      setRoomData(initRoom);
      setPreviewImage(null);
    }
  };

  useEffect(() => {
    if (!isEditing) {
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
    if (roomData.type !== "" && roomData.view !== "") {
      setPreviewImage(null);
      setRoomData(initRoom);
      onSubmit(roomData);
    } else {
      toast.error("Please choose type and view");
    }
  };

  const [name, setName] = useState(false);

  const openAddNew = (select) => {
    setName(select);
  };

  const [newRoomType, setNewRoomType] = useState("");
  const [newRoomView, setNewRoomView] = useState("");

  const handleNewTypeAndView = (e) => {
    const { value, id } = e.target;

    if (id === "New Type") {
      setNewRoomType(value);
    }
    if (id === "New View") {
      setNewRoomView(value);
    }
  };

  const handleAddNew = (name) => {
    if (name === "New Type" && newRoomType !== "") {
      console.log(newRoomType);
      setNewRoomType("");
      setName("");
      setTypes([...types, newRoomType]);
      setRoomData({ ...roomData, type: newRoomType });
    }
    if (name === "New View" && newRoomView !== "") {
      console.log(newRoomView);
      setNewRoomView("");
      setName("");
      setViews([...views, newRoomView]);
      setRoomData({ ...roomData, view: newRoomView });
    }
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
            <div className={styles.input__grid}>
              <div className={styles.input__group}>
                <label htmlFor="adult" className={styles.label}>
                  Adult
                </label>
                <input
                  id="adult"
                  type="number"
                  min={0}
                  className={styles.input}
                  value={roomData.adult}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.input__group}>
                <label htmlFor="children" className={styles.label}>
                  Children
                </label>
                <input
                  id="children"
                  type="number"
                  min={0}
                  className={styles.input}
                  value={roomData.children}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Input Image */}
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
            {/* Add New Type */}
            <div className={styles.select__grid}>
              <div className={styles.select__container}>
                <label htmlFor="type" className={styles.label}>
                  Type
                </label>
                <div className={styles.select_group}>
                  <select
                    required
                    id="type"
                    className={styles.select}
                    onChange={handleInputChange}
                    value={roomData.type}
                  >
                    <option value="" disabled hidden>
                      Select a room type
                    </option>
                    {types.map((type, index) => (
                      <option value={type} key={index} name={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div
                    className={styles.select_button}
                    onClick={() => openAddNew("New Type")}
                  >
                    New
                  </div>
                </div>
              </div>
              {/* Add New View */}
              <div className={styles.select__container}>
                <label htmlFor="view" className={styles.label}>
                  View
                </label>
                <div className={styles.select_group}>
                  <select
                    required
                    id="view"
                    className={styles.select}
                    onChange={handleInputChange}
                    value={roomData.view}
                  >
                    <option value="" disabled hidden>
                      Select a room view
                    </option>
                    {views.map((view, index) => (
                      <option value={view} key={index} name={view}>
                        {view}
                      </option>
                    ))}
                  </select>
                  <div
                    className={styles.select_button}
                    onClick={() => openAddNew("New View")}
                  >
                    New
                  </div>
                </div>
              </div>
            </div>

            {/* Add New Type and View */}
            {name && (
              <div className={styles.input__group}>
                <label htmlFor={name} className={styles.label}>
                  {name}
                </label>
                <div style={{ display: "flex" }}>
                  <input
                    id={name}
                    type="text"
                    className={styles.custom_text}
                    onChange={handleNewTypeAndView}
                    style={{ flex: 1 }}
                  />
                  <div
                    className={styles.custom_button}
                    onClick={() => handleAddNew(name)}
                  >
                    Add
                  </div>
                </div>
              </div>
            )}

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
