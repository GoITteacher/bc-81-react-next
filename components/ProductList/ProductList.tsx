"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./ProductList.module.css";
import { getProducts } from "@/services/products";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });
  const products = productsQuery.data?.products || [];

  return (
    <div className={css["productList"]}>
      <h1>PRODUCTS</h1>

      <ul>
        {products.map((el) => {
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

export default ProductList;
