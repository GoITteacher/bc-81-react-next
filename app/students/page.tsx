import { getStudents } from "@/lib/students";
import Link from "next/link";

const Page = async () => {
  const response = await getStudents();
  const students = response.items;

  return (
    <main>
      <ul>
        {students.map((student) => {
          return (
            <li>
              <Link href={`/students/${student._id}`}>
                {student.firstName} {student.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
