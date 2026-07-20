import { useState } from "react";
import { getStudents, Student } from "../../services/studentService";
import SearchForm from "../SearchForm/SearchForm";
import css from "./Students.module.css";
interface StudentsProps {
  students: Student[];
  setStudents: (arr: Student[]) => void;
}

const Students = ({ students, setStudents }: StudentsProps) => {
  const handleSubmit = async (query: string) => {
    const res = await getStudents(query);
    setStudents(res.items);
  };

  return (
    <div className={css["students"]}>
      <h3>Students</h3>
      <SearchForm onSubmit={handleSubmit} />

      <ul>
        {students.map((el) => {
          return (
            <li key={el._id}>
              {el.firstName} {el.lastName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Students;
