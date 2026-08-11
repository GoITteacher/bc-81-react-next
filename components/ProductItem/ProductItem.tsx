"use client";

import { Product } from "@/types/products";
import css from "./ProductItem.module.css";
import { useProductsStore } from "@/stores/products";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const wishlist = useProductsStore((s) => s.wishlist);
  const bucket = useProductsStore((s) => s.bucket);

  const addToWishlist = useProductsStore((s) => s.addToWishList);
  const addToBucket = useProductsStore((s) => s.addToBucket);
  const removeFromWishlist = useProductsStore((s) => s.removeFromWishList);
  const removeFromBucket = useProductsStore((s) => s.removeFromBucket);

  const isThereWishlist = wishlist.some((el) => el._id === product._id);
  const isThereBucket = bucket.some((el) => el._id === product._id);

  return (
    <div className={css["productItem"]}>
      <p>
        {product.name} ({product.price}$)
      </p>

      {!isThereWishlist && (
        <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
      )}
      {isThereWishlist && (
        <button onClick={() => removeFromWishlist(product._id)}>
          Remove from Wishlist
        </button>
      )}

      {!isThereBucket && (
        <button onClick={() => addToBucket(product)}>Add To bucket</button>
      )}
      {isThereBucket && (
        <button onClick={() => removeFromBucket(product._id)}>
          Remove from bucket
        </button>
      )}
    </div>
  );
};

export default ProductItem;
