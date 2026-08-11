export interface Book {
  id: string;
  title: string;
  author: string;
  desc: string;
  isbn: string;
  price: number;
  pages: number;
}

export interface BookDraft {
  title?: string;
  author?: string;
  desc?: string;
  isbn?: string;
  price?: number;
  pages?: number;
}
