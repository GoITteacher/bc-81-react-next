import { serverAPI } from "./serverConfig";

export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetCarsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}

export const getCars = async (make: string) => {
  const params = {
    make: make,
  };
  const res = await serverAPI.get<GetCarsResponse>("/public/cars", { params });
  return res.data;
};
