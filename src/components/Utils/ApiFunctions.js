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
      return response.data.data;
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
    throw new Error(error.response.data.message);
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
    formData.append("adult", room.adult);
    formData.append("child", room.child);

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
    formData.append("adult", room.adult);
    formData.append("child", room.child);

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

export async function getTypes() {
  try {
    const response = await api.get(`/rooms/room/types`);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error("");
  }
}

export async function getViews() {
  try {
    const response = await api.get(`/rooms/room/views`);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error("");
  }
}

export async function getReservations(type, page, limit) {
  try {
    const response = await api.get(
      `/reservations/${type}?page=${page}&limit=${limit}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function updateStatus(reservationId, status) {
  try {
    const response = api.put(
      `/reservations/reservation/${reservationId}/status?status=${status}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getReservationByConfirmationCode(confirmationCode) {
  try {
    const response = await api.get(
      `/reservations/reservation/confirmation?confirmationCode=${confirmationCode}`
    );
    if (response.status === 200) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getReservationByEmail(email) {
  try {
    const response = await api.get(
      `/reservations/reservation/email?email=${email}`
    );
    console.log(response);
    if (response.status === 200) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function getMaxAdult() {
  try {
    const response = await api.get("/rooms/room/max-adult");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getMaxChild() {
  try {
    const response = await api.get("/rooms/room/max-child");
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAvailableRooms(
  checkInDate,
  checkOutDate,
  adult,
  child,
  page,
  limit
) {
  try {
    const response = await api.get(
      `/rooms/available-rooms?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&adult=${adult}&child=${child}&page=${page}&limit=${limit}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}

export async function reserve(infor, room, data) {
  try {
    // const formData = new FormData();
    // formData.append("checkInDate", data.checkInDate);
    // formData.append("checkOutDate", data.checkOutDate);
    // formData.append("adult", data.adult);
    // formData.append("child", data.child);
    // formData.append("prefix", infor.prefix);
    // formData.append("lastName", infor.lastName);
    // formData.append("firstName", infor.firstName);
    // formData.append("email", infor.email);
    // formData.append("phone", infor.phone);
    // formData.append("specialRequests", infor.specialRequests);
    const reservation = {
      checkInDate: data.checkInDate,
      checkOutDate: data.checkOutDate,
      adult: data.adult,
      child: data.child,
      prefix: infor.prefix,
      lastName: infor.lastName,
      firstName: infor.firstName,
      email: infor.email,
      phone: infor.phone,
      specialRequests: infor.specialRequests,
    };
    const response = await api.post(
      `/reservations/room/reservation?roomId=${room.roomId}`,
      reservation
    );

    if (response.status === 200) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
}
