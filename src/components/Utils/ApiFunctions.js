import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080",
});

export async function addRoom(photo) {
  console.log(photo);
  const formData = new FormData();
  formData.append("image", photo);
  const response = await api.post("/image/fileSystem", formData);

  if (response.status === 200) {
    return true;
  } else {
    return false;
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
  const response = await api.delete(`/image/fileSystem/delete/${name}`);

  if (response.status === 200) {
    return response.data;
  } else {
    return false;
  }
}
