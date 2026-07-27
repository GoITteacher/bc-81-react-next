import {
  Car,
  CreateCarBody,
  GetCarsParams,
  GetCarsResponse,
} from "../types/cars";
import { serverApi } from "./serverConfig";

export const getCars = async (params?: GetCarsParams) => {
  const res = await serverApi.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};

export const createCar = async (newCar: CreateCarBody) => {
  const res = await serverApi.post<Car>("/public/cars", newCar);
  return res.data;
};

export const updateCar = async (id: string, body: CreateCarBody) => {
  const res = await serverApi.put<Car>(`/public/cars/${id}`, body);
  return res.data;
};

export const deleteCar = async (id: string) => {
  const res = await serverApi.delete<Car>(`/public/cars/${id}`);
  return res.data;
};
