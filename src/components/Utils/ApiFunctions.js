import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export async function addRoom(photo) {
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
    throw new Error(error.response.data);
  }
}

export async function getGallery(page, limit) {
  const response = await api.get(
    `/image/fileSystem/name?page=${page}&limit=${limit}`
  );
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
    throw new Error(`Delete image failed`);
  }
}

export async function getAllRooms() {
  try {
    const response = await api.get("/rooms/all-rooms/all");
    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(`Error fetching rooms`);
  }
}

export async function getAllRoomsByPageAndLimit(page, limit) {
  try {
    const response = await api.get(
      `/rooms/all-rooms?page=${page}&limit=${limit}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(`Error fetching rooms`);
  }
}
export async function deleteRoom(id) {
  try {
    const response = await api.delete(`/rooms/delete/room/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Delete Error`);
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
    toast.error(error);
    throw new Error(`Adding fail`);
  }
}

export async function editRoom(id, room) {
  try {
    const formData = new FormData();
    formData.append("image", room.image);
    formData.append("name", room.name);
    formData.append("price", room.price);
    formData.append("area", room.area);
    formData.append("type", room.type);
    formData.append("details", room.details);
    formData.append("view", room.view);

    const response = await api.put(`/rooms/update/${id}`, formData);

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error("");
  }
}
