import { serverAPI } from "./serverConfig";
export interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  major: string;
  cohortYear: number;
  gpa: number;
  enrolled: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GetStudentsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Student[];
}

export const getStudents = async (lastName: string) => {
  const params = {
    lastName: lastName,
    perPage: 20,
  };
  const res = await serverAPI.get<GetStudentsResponse>("/public/students", {
    params,
  });
  return res.data;
};
