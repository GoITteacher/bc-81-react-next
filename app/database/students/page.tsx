import { getStudents } from "@/lib/students";
import css from "./Page.module.css";
import Link from "next/link";

const Page = async () => {
  const res = await getStudents();
  const students = res.items;

  return (
    <div className={css["page"]}>
      <h1>Students Page</h1>
      <ul>
        {students.map((el) => {
          return (
            <li>
              <Link href={`/database/students/${el._id}`}>
                {el.firstName} {el.lastName}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
