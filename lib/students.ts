import { GetStudentsResponse, Student } from "@/types/students";
import { globalApi } from "./serverConfig";

export const getStudents = async () => {
  const res = await globalApi.get<GetStudentsResponse>("/public/students");
  return res.data;
};

export const getStudentById = async (id: string) => {
  try {
    const res = await globalApi.get<Student>(`/public/students/${id}`);
    return res.data;
  } catch {}
};
