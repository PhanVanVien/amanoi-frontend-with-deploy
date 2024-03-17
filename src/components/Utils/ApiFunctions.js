import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export async function addRoom(photo) {
  console.log(photo);
  const formData = new FormData();
  formData.append("image", photo);
  try {
    const response = await api.post("/image/fileSystem", formData);
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw Error(`Upload image failed`);
  }
}

export async function getGallery() {
  const response = await api.get("/image/fileSystem/name");
  if (response.status === 200) {
    return response.data;
  } else {
    return false;
  }
}

export async function deleteImageFromGallery(name) {
  try {
    const response = await api.delete(`/image/fileSystem/delete/${name}`);
    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    throw Error(`Delete image failed`);
  }
}

export async function getAllRooms() {
  try {
    const response = await api.get("/rooms/all-rooms");
    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    throw Error(`Error fetching rooms`);
  }
}

export async function deleteRoom(id) {
  try {
    const response = await api.delete(`/rooms/delete/room/${id}`);
    return response.data;
  } catch (error) {
    throw Error(`Delete Error`);
  }
}

export async function addNewRoom(room) {
  try {
    const formData = new FormData();
    formData.append("image", room.image);
    formData.append("name", room.name);
    formData.append("price", room.price);
    formData.append("area", room.area);
    formData.append("type", room.type);
    formData.append("details", room.details);
    formData.append("view", room.view);

    const response = await api.post(`/rooms/add/new-room`, formData);

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw Error(`Adding fail`);
  }
}
