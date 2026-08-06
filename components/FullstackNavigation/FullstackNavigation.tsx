import Link from "next/link";
import css from "./FullstackNavigation.module.css";

const FullstackNavigation = () => {
  return (
    <ul className={css["fullstackNavigation"]}>
      <li>
        <Link href="/fullstack/html">HTML</Link>
      </li>
      <li>
        <Link href="/fullstack/javascript">JavaScript</Link>
      </li>
      <li>
        <Link href="/fullstack/typescript">TypeScript</Link>
      </li>
      <li>
        <Link href="/fullstack/react">React</Link>
      </li>
      <li>
        <Link href="/fullstack/nextjs">NextJs</Link>
      </li>
      <li>
        <Link href="/fullstack/nodejs">NodeJS</Link>
      </li>
    </ul>
  );
};

export default FullstackNavigation;
