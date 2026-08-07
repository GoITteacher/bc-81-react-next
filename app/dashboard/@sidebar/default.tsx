import Link from "next/link";
import { sleep } from "@/utils/sleep";
import css from "./Sidebar.module.css";

const links = [
  { href: "/dashboard", label: "All" },
  { href: "/dashboard/week", label: "Weekly" },
  { href: "/dashboard/month", label: "Monthly" },
  { href: "/dashboard/year", label: "Annual" },
];

const Default = async () => {
  await sleep(1000);

  return (
    <aside className={css.sidebar}>
      <h1 className={css.title}>Dashboard</h1>
      <p className={css.text}>Parallel routes example</p>
      <nav className={css.nav} aria-label="Dashboard periods">
        {links.map((link) => (
          <Link className={css.link} href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Default;
