import React, { useState } from "react";
import { addRoom } from "../Utils/ApiFunctions";
import { toast } from "react-toastify";

const AddGalery = () => {
  const [image, setImage] = useState();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addRoom(image);
      console.log(response);
      if (response !== undefined) {
        toast.success("Add image successful");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImageChange} />
      <img src="http://localhost:8080/image/fileSystem/iconvan.png" />
      <button type="submit">Click me</button>
    </form>
  );
};

export default AddGalery;
