"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useAuthStore } from "@/stores/authStore";

export default function AppHeader() {
  const user = useAuthStore((s) => s.user);
  const isAuth = useAuthStore((s) => s.isAuth);

  return (
    <header className={css.header}>
      {isAuth && <p>Hello {user?.name}</p>}
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}
