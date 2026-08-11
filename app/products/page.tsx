import ProductList from "@/components/ProductList/ProductList";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <ProductList />
    </div>
  );
};

export default Page;
