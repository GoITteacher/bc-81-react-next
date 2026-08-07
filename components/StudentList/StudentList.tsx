import { getStudents } from "@/lib/students";
import css from "./StudentList.module.css";
import { sleep } from "@/utils/sleep";

const StudentList = async () => {
  await sleep(2000);
  const studentsResponse = await getStudents();
  const students = studentsResponse.items;
  return (
    <ul className={css["list"]}>
      {students.map((el) => {
        return (
          <li key={el._id}>
            {el.firstName} - {el.lastName}
          </li>
        );
      })}
    </ul>
  );
};

export default StudentList;
