"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useTotalFruits } from "@/hooks/fruits";
import { useProductsStore } from "@/stores/products";

export default function AppHeader() {
  const totalFruits = useTotalFruits();
  const wishlist = useProductsStore((s) => s.wishlist);
  const bucket = useProductsStore((s) => s.bucket);

  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
        <li>
          <Link href="/fruits">Fruits ({totalFruits})</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/products/wishlist">Wishlist ({wishlist.length})</Link>
        </li>
        <li>
          <Link href="/products/bucket">Bucket ({bucket.length})</Link>
        </li>
      </ul>
    </header>
  );
}
