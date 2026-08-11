import CreateBookForm from "@/components/CreateBookForm/CreateBookForm";
import css from "./Page.module.css";
import BookList from "@/components/BookList/BookList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <h1>Books</h1>
      <CreateBookForm />
      <BookList />
    </div>
  );
};

export default Page;
