"use client";

import { useParams } from "next/navigation";
import css from "./RemoveStudentForm.module.css";

const RemoveStudentForm = () => {
  const params = useParams();
  const id = params.studentId as string;

  const handleClick = () => {
    console.log("Видаляємо", id);
  };

  return (
    <div className={css["removeStudentForm"]}>
      <button onClick={handleClick}>Remove Student</button>
    </div>
  );
};

export default RemoveStudentForm;
