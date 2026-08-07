import Link from "next/link";
import css from "./Layout.module.css";
interface LayoutProps {
  books: React.ReactNode;
  songs: React.ReactNode;
  students: React.ReactNode;
}

const Layout = ({ books, students, songs }: LayoutProps) => {
  return (
    <div className={css["layout"]}>
      <div>
        <Link href="/database/popular">Popular</Link>
        <Link href="/database/new">New</Link>
        <Link href="/database/online">Online</Link>
      </div>

      {books}
      {students}
      {songs}
    </div>
  );
};

export default Layout;
