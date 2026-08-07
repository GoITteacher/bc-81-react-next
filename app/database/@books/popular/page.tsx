import BookList from "@/components/BookList/BookList";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <BookList />
    </div>
  );
};

export default Page;
