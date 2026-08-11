import { Book, BookDraft } from "@/types/books";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BooksStore {
  books: Book[];
  bookDraft: BookDraft | null;

  addBook: (book: Book) => void;
  removeBook: (id: string) => void;
  resetBooks: () => void;

  setDraft: (draft: BookDraft) => void;
  clearDraft: () => void;
}

export const useBooksStore = create<BooksStore>()(
  persist(
    (setStore) => {
      return {
        books: [],

        addBook: (book) => {
          setStore((store) => {
            return {
              books: [...store.books, book],
            };
          });
        },

        removeBook: (id) => {
          setStore((store) => {
            const copy = store.books.filter((el) => el.id !== id);
            return {
              books: copy,
            };
          });
        },

        resetBooks: () => {
          setStore(() => {
            return {
              books: [],
            };
          });
        },

        setDraft: (draft: BookDraft) => {
          setStore(() => {
            return { bookDraft: draft };
          });
        },

        clearDraft: () => {
          setStore(() => {
            return {
              bookDraft: {},
            };
          });
        },
      };
    },
    {
      name: "books",
    }
  )
);
