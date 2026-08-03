import { Book } from "@/types/books";
import css from "./BookItem.module.css";

interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  return (
    <li className={css["bookItem"]}>
      <p>
        {book.title} - {book.author}
      </p>
      <p>{book.desc}</p>
    </li>
  );
};

export default BookItem;
