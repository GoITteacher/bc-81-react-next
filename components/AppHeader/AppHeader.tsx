"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { selectChangeLang, selectLang, useLangStore } from "@/stores/langStore";

export default function AppHeader() {
  const lang = useLangStore(selectLang);
  const changeLang = useLangStore(selectChangeLang);

  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}
