import { fetchBooks } from "@/lib/books";
import css from "./Page.module.css";
import BookList from "@/components/BookList/BookList";

const Page = async () => {
  const response = await fetchBooks();

  return (
    <div className={css["page"]}>
      <h1>Books</h1>
      <BookList books={response.items} />
    </div>
  );
};

export default Page;
