import axios from "axios";
import { Student } from "../types/student";
import { Car } from "../types/car";

export const PER_PAGE = 2;

const api = axios.create({
  baseURL: "https://q10gsl5s9d.execute-api.us-east-1.amazonaws.com",
  params: {
    perPage: PER_PAGE,
  },
});

interface ResponseData<T> {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: T[];
}

type GetStudentsResponse = ResponseData<Student>;

export const getStudents = async (firstName: string, page: number) => {
  const { data } = await api.get<GetStudentsResponse>("/public/students", {
    params: {
      firstName: firstName,
      page: page,
      perPage: PER_PAGE,
    },
  });

  return data;
};

type GetCarsResponse = ResponseData<Car>;

interface GetCarsParams {
  make?: string;
  page?: number;
}

export const getCars = async (params?: GetCarsParams) => {
  const { data } = await api.get<GetCarsResponse>("/public/cars", {
    params,
  });

  return data;
};
