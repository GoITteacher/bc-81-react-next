import { Product } from "@/types/products";
import { create } from "zustand";

interface ProductsStore {
  wishlist: Product[];
  bucket: Product[];

  addToWishList: (product: Product) => void;
  removeFromWishList: (id: string) => void;
  clearWishList: () => void;

  addToBucket: (product: Product) => void;
  removeFromBucket: (id: string) => void;
  clearBucket: () => void;
}

export const useProductsStore = create<ProductsStore>()((setStore) => {
  return {
    wishlist: [],
    bucket: [],

    addToWishList: (product: Product) => {
      setStore((store) => {
        return {
          wishlist: [...store.wishlist, product],
        };
      });
    },

    removeFromWishList: (id: string) => {
      setStore((store) => {
        return {
          wishlist: store.wishlist.filter((el) => el._id !== id),
        };
      });
    },

    clearWishList: () => {
      setStore(() => {
        return {
          wishlist: [],
        };
      });
    },

    addToBucket: (product: Product) => {
      setStore((store) => {
        return {
          bucket: [...store.bucket, product],
        };
      });
    },

    removeFromBucket: (id: string) => {
      setStore((store) => {
        return {
          bucket: store.bucket.filter((el) => el._id !== id),
        };
      });
    },

    clearBucket: () => {
      setStore(() => {
        return {
          bucket: [],
        };
      });
    },
  };
});
