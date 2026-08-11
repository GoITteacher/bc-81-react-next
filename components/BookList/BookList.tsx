"use client";
import { useBooksStore } from "@/stores/books";
import css from "./BookList.module.css";
import BookItem from "./BookItem/BookItem";

const BookList = () => {
  const books = useBooksStore((s) => s.books);

  return (
    <div className={css["bookList"]}>
      <ul>
        {books.map((el) => {
          return <BookItem key={el.id} book={el} />;
        })}
      </ul>
    </div>
  );
};

export default BookList;
