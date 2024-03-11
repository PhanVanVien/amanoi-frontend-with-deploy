import React, { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import { IoCloseOutline } from "react-icons/io5";
import {
  addRoom,
  deleteImageFromGallery,
  getGallery,
} from "../Utils/ApiFunctions";
import { toast } from "react-toastify";
import CustomButton from "../Common/CustomButton";

const Gallery = () => {
  const baseURL = "http://localhost:8080/image/fileSystem/";
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getGallery();
      setGallery(data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };
  const [image, setImage] = useState();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addRoom(image);
      if (response !== undefined) {
        toast.success("Add image successful");
        fetchData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (name) => {
    try {
      const response = await deleteImageFromGallery(name);
      if (response !== undefined) {
        toast.success("Delete image successful");
        fetchData();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Click me</button>
      </form>
      <h1 className={styles.title}>Explore Amanoi</h1>
      <CustomButton title="Upload Image" />
      <div className={styles.container}>
        {gallery.map((item, index) => (
          <div className={styles.box} key={index}>
            <img
              className={styles.image}
              src={`${baseURL}${item}`}
              alt={`Image ${index + 1}`}
            />
            <div className={styles.delete} onClick={() => handleDelete(item)}>
              <IoCloseOutline size={24} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
