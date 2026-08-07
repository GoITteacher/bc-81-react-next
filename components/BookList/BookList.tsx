import { getBooks } from "@/lib/books";
import css from "./BookList.module.css";
import { sleep } from "@/utils/sleep";

const BookList = async () => {
  await sleep(8000);
  const booksResponse = await getBooks();
  const books = booksResponse.items;
  return (
    <ul className={css["list"]}>
      {books.map((el) => {
        return (
          <li key={el._id}>
            {el.title} - {el.author}
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
