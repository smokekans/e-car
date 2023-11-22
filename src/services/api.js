import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export async function getCars(page = 1, limit = 5) {
  const { data } = await axios.get(`cars?page=${page}&limit=${limit}`);
  return data;
}

export async function getCar(id) {
  const { data } = await axios.get(`cars/${id}`);
  return data;
}

export async function createCar({ brand, model, color, year }) {
  const { data } = await axios.post("cars", {
    brand,
    model,
    color,
    year,
  });
  return data;
}

export async function updateCar({ id, brand, model, color, year }) {
  const { data } = await axios.put(`/cars/${id}`, {
    brand,
    model,
    color,
    year,
  });
  return data;
}

export async function deleteCar(id) {
  const { data } = await axios.delete(`cars/${id}`);
  return data;
}
