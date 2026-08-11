import WishlistProducts from "@/components/WishlistProducts/WishlistProducts";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Wish List</h1>
      <WishlistProducts />
    </div>
  );
};

export default Page;
