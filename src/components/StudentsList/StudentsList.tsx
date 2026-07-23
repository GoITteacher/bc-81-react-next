import { Student } from "../../types/student";
import styles from "./StudentsList.module.css";

interface StudentsListProps {
  students: Student[];
}

const StudentsList = ({ students }: StudentsListProps) => {
  return (
    <ul className={styles.list}>
      {students.map((student) => (
        <li className={styles.item} key={student._id}>
          <p className={styles.text}>
            {student.cohortYear}. {student.firstName} {student.lastName}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default StudentsList;
