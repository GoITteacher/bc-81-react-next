import { Book } from "@/types/books";
import css from "./BookItem.module.css";

interface BookItemProps {
  book: Book;
}

const BookItem = ({ book }: BookItemProps) => {
  return (
    <div className={css["bookItem"]}>
      <p>
        {book.title} {book.author}
      </p>
    </div>
  );
};

export default BookItem;
