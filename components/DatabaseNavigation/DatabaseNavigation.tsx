import Link from "next/link";
import css from "./DatabaseNavigation.module.css";

const DatabaseNavigation = () => {
  return (
    <ul className={css["databaseNavigation"]}>
      <li>
        <Link href="/database/books/all">Books</Link>
      </li>
      <li>
        <Link href="/database/books2/all">Books 2</Link>
      </li>
      <li>
        <Link href="/database/cars">Cars</Link>
      </li>
      <li>
        <Link href="/database/students">Students</Link>
      </li>
      <li>
        <Link href="/database/users">Users</Link>
      </li>
    </ul>
  );
};

export default DatabaseNavigation;
