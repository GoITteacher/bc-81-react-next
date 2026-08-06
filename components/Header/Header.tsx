import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <nav className={css["nav"]}>
        <ul className={css["list"]}>
          <li>
            <Link href="/students">Students</Link>
            <Link href="/cars">Cars</Link>
            <Link href="/users">Users</Link>
            <Link href="/books/all">Books</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
