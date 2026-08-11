import BucketProducts from "@/components/BucketProducts/BucketProducts";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Bucket</h1>
      <BucketProducts />
    </div>
  );
};

export default Page;
