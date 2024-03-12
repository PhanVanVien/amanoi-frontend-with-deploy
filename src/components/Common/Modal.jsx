import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./Modal.module.css";

const Modal = ({ isModalOpen, modalContent, onClose, onChange, onSubmit }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleSubmit = (e) => {
    onSubmit(e);
    setPreviewImage(null);
    onClose();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    onChange(e);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <form className={styles.modal}>
      <div className={styles.modal_content}>
        <h1 className={styles.title}>{modalContent}</h1>
        <div className={styles.image__container}>
          {previewImage && (
            <div className={styles.image__zone}>
              <img
                src={previewImage}
                alt="Preview"
                height={"100%"}
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
        </div>
        <div className={styles.button__group}>
          <div
            className={`${styles.button} ${styles.upload}`}
            onClick={handleSubmit}
          >
            Upload
          </div>
          <div>
            <input
              type="file"
              name="file"
              id="file"
              className={styles.inputfile}
              onChange={handleImageChange}
            />
            <label htmlFor="file">Choose a file</label>
          </div>
          <div
            className={`${styles.button} ${styles.cancel}`}
            onClick={onClose}
          >
            Cancel
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
