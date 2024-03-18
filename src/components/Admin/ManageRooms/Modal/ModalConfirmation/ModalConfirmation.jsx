import React from "react";
import styles from "./ModalConfirmation.module.css";

const ModalConfirmation = ({ isConfirm, onClose, onSubmit }) => {
  const handleClose = () => {
    onClose();
  };

  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  if (!isConfirm) {
    return null;
  }

  return (
    <form className={styles.modal}>
      <div className={styles.modal_content}>
        <span className={styles.title}>Confirmation</span>
        <span className={styles.text}>
          Are you sure you want to delete this item?
        </span>
        <div className={styles.button__group}>
          <div
            className={`${styles.button} ${styles.upload}`}
            onClick={() => handleSubmit()}
          >
            Yes
          </div>
          <div
            className={`${styles.button} ${styles.cancel}`}
            onClick={() => handleClose()}
          >
            No
          </div>
        </div>
      </div>
    </form>
  );
};

export default ModalConfirmation;
