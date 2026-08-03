import { Book } from "@/types/books";
import css from "./BookList.module.css";
import BookItem from "../BookItem/BookItem";

interface BookListProps {
  books: Book[];
}

const BookList = ({ books }: BookListProps) => {
  return (
    <ul className={css["bookList"]}>
      {books.map((el) => {
        return <BookItem key={el._id} book={el} />;
      })}
    </ul>
  );
};

export default BookList;
