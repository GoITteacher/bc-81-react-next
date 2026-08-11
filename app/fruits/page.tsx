import Fruits from "@/components/Fruits/Fruits";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>FRUITS</h1>

      <Fruits />
    </div>
  );
};

export default Page;
