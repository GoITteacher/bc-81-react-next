"use client";
import { useProductsStore } from "@/stores/products";
import css from "./BucketProducts.module.css";
import ProductItem from "../ProductItem/ProductItem";

const BucketProducts = () => {
  const bucket = useProductsStore((s) => s.bucket);

  return (
    <div className={css["bucketProducts"]}>
      <ul>
        {bucket.map((el) => {
          return (
            <li key={el._id}>
              <ProductItem product={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BucketProducts;
