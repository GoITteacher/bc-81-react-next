import { useState } from "react";
import Cars from "./Cars/Cars";
import Movies from "./Movies/Movies";
import OrderForm from "./OrderForm/OrderForm";
import Songs from "./Songs/Songs";
import Students from "./Students/Students";
import { Student } from "../services/studentService";

export default function App() {
  const [students, setStudents] = useState<Student[]>([]);

  return (
    <>
      <Cars />
      <Movies />
      <Students students={students} setStudents={setStudents} />
    </>
  );
}
