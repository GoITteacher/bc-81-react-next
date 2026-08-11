"use client";
import { useProductsStore } from "@/stores/products";
import css from "./WishlistProducts.module.css";
import ProductItem from "../ProductItem/ProductItem";

const WishlistProducts = () => {
  const wishlist = useProductsStore((s) => s.wishlist);

  return (
    <div className={css["wishlistProducts"]}>
      {wishlist.map((el) => {
        return (
          <li key={el._id}>
            <ProductItem product={el} />
          </li>
        );
      })}
    </div>
  );
};

export default WishlistProducts;
