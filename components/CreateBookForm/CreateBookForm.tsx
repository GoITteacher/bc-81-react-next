"use client";
import { Book, BookDraft } from "@/types/books";
import css from "./CreateBookForm.module.css";
import { useBooksStore } from "@/stores/books";
import { ChangeEvent } from "react";

const CreateBookForm = () => {
  const draft = useBooksStore((s) => s.bookDraft);

  const addBook = useBooksStore((s) => s.addBook);
  const setDraft = useBooksStore((s) => s.setDraft);
  const clearDraft = useBooksStore((s) => s.clearDraft);

  const handleCreate = (formData: FormData) => {
    const book: Book = {
      id: Date.now().toString(),
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      desc: formData.get("desc") as string,
      isbn: formData.get("isbn") as string,
      price: Number(formData.get("price")),
      pages: Number(formData.get("pages")),
    };

    addBook(book);
    clearDraft();
  };

  const handleChange = (e: ChangeEvent<HTMLFormElement, Element>) => {
    const formData = new FormData(e.currentTarget);

    const bookDraft: BookDraft = {
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      desc: formData.get("desc") as string,
      isbn: formData.get("isbn") as string,
      price: Number(formData.get("price")),
      pages: Number(formData.get("pages")),
    };

    setDraft(bookDraft);
  };

  return (
    <div className={css["createBookForm"]}>
      <form action={handleCreate} onChange={handleChange}>
        <input
          type="text"
          name="title"
          placeholder="title"
          defaultValue={draft?.title}
        />
        <input
          type="text"
          name="author"
          placeholder="author"
          defaultValue={draft?.author}
        />
        <input
          type="text"
          name="desc"
          placeholder="desc"
          defaultValue={draft?.desc}
        />
        <input
          type="text"
          name="isbn"
          placeholder="isbn"
          defaultValue={draft?.isbn}
        />
        <input
          type="number"
          name="price"
          placeholder="price"
          defaultValue={draft?.price}
        />
        <input
          type="number"
          name="pages"
          placeholder="pages"
          defaultValue={draft?.pages}
        />
        <button>Додати книжку</button>
      </form>
    </div>
  );
};

export default CreateBookForm;
