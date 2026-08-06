import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css["header"]}>
      <nav className={css["nav"]}>
        <ul className={css["list"]}>
          <li>
            <Link href="/">Home</Link>
            <Link href="/fullstack">Full Stack</Link>
            <Link href="/database">Data Base</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
